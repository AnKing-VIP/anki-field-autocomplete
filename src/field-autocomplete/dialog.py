from anki import version as anki_version
from aqt import mw
from aqt.utils import openLink
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

from .gui.forms import settings_dialog
from .user_config import getDefaultConfig, getUserOption, writeConfig

conf = getUserOption()


class SettingsDialog(QDialog):

    timer = None

    def __init__(self, parent):
        QDialog.__init__(self, mw, Qt.WindowType.Window)
        mw.setupDialogGC(self)
        self.mw = mw
        self.parent = parent
        self.setupDialog()
        self.loadConfigData()
        self.setupConnections()

        self.exec()

    def setupDialog(self):
        self.form = settings_dialog.Ui_Dialog()
        self.form.setupUi(self)

    def loadConfigData(self):
        f = self.form

        # Checkboxes -------------
        c = conf['loose_search']
        if f.checkBox_search_mode.isChecked() != c:
            f.checkBox_search_mode.click()

        # LineEdits -------------
        t = conf["toggle_ac_shortcut"]
        f.toggle_ac_shortcut_lineedit.setText(t)

    def setupConnections(self):
        f = self.form

        # PushButtons -------------
        f.OkButton.clicked.connect(self.accept)
        f.RestoreButton.clicked.connect(self.resetConfig)

        f.toolButton_website.clicked.connect(lambda _: self.openWeb("anking"))
        f.toolButton_youtube.clicked.connect(lambda _: self.openWeb("youtube"))
        f.toolButton_patreon.clicked.connect(lambda _: self.openWeb("patreon"))
        f.toolButton_palace.clicked.connect(lambda _: self.openWeb("palace"))
        f.toolButton_instagram.clicked.connect(
            lambda _: self.openWeb("instagram"))
        f.toolButton_facebook.clicked.connect(
            lambda _: self.openWeb("facebook"))

        controller = {
            f.checkBox_search_mode: ("loose_search",),
        }
        for cb, args in controller.items():
            cb.stateChanged.connect(
                lambda cb=cb, args=args: self._updateCheckbox(cb, *args)
            )

        a = f.toggle_ac_shortcut_lineedit
        t = a.text()
        a.textChanged.connect(
            lambda t=a.text(): self._updateLineEdit(t, 'toggle_ac_shortcut'))

    def openWeb(self, site):
        if site == "anking":
            openLink('https://www.ankingmed.com')
        elif site == "youtube":
            openLink('https://www.youtube.com/theanking')
        elif site == "patreon":
            openLink('https://www.patreon.com/ankingmed')
        elif site == "instagram":
            openLink('https://instagram.com/ankingmed')
        elif site == "facebook":
            openLink('https://facebook.com/ankingmed')
        elif site == "video":
            openLink('https://youtu.be/5XAq0KpU3Jc')
        elif site == "palace":
            openLink(
                'https://courses.ankipalace.com/?utm_source=anking_autocomplete_add-on&utm_medium=anki_add-on&utm_campaign=mastery_course')

    def _updateCheckbox(self, cb, key):
        n = -1 if cb == 2 else 1
        v = True if n == -1 else False
        conf[key] = v
        writeConfig(conf)
        self._refresh()

    def _updateLineEdit(self, text, key):
        conf[key] = text
        writeConfig(conf)
        self._refresh()

    def resetConfig(self):
        global conf
        conf = getDefaultConfig()
        writeConfig(conf)
        self._refresh()
        self.close()
        SettingsDialogExecute()

    def _refresh(self, ms=100):
        if self.timer:
            self.timer.stop()
        old_anki = tuple(int(i) for i in anki_version.split(".")) < (2, 1, 27)

        if old_anki:
            self.timer = mw.progress.timer(
                ms, lambda: mw.reset(True), False)
        else:
            self.timer = mw.progress.timer(
                ms, self._resetMainWindow, False)

    def _resetMainWindow(self):
        mw.reset(True)
        # Anki 2.1.28 and up no longer fully redraw the toolbar on mw reset,
        # so trigger the redraw manually:
        mw.toolbar.draw()
        # NOTE (Glutanimate):
        # This is not an ideal solution as forcing a full redraw might
        # interfere with the background sync indicator and potentially other
        # add-ons in the future. For a definitive fix please consider refactoring
        # the add-on so that the web content is updated dynamically without
        # having to reload the web view.


def create_get_help_submenu(parent: QMenu) -> QMenu:
    submenu_name = "Get Anki Help"
    menu_options = [
        (
            "Online Mastery Course",
                'https://courses.ankipalace.com/?utm_source=anking_autocomplete_add-on&utm_medium=anki_add-on&utm_campaign=mastery_course'
        ),
        ("Daily Q and A Support", "https://www.ankipalace.com/memberships"),
        ("1-on-1 Tutoring", "https://www.ankipalace.com/tutoring"),
    ]
    submenu = QMenu(submenu_name, parent)
    for name, url in menu_options:
        act = QAction(name, mw)
        act.triggered.connect(lambda _, u=url: openLink(u))
        submenu.addAction(act)
    return submenu


def maybe_add_get_help_submenu(menu: QMenu) -> None:
    """Adds 'Get Anki Help' submenu in 'Anking' menu if needed.

    The submenu is added if:
     - The submenu does not exist in menu
     - The submenu is an outdated version - existing is deleted

    With versioning and anking_get_help property,
    future version can rename, hide, or change contents in the submenu
    """
    submenu_property = "anking_get_help"
    submenu_ver = 2
    for act in menu.actions():
        if act.property(submenu_property) or act.text() == "Get Anki Help":
            ver = act.property("version")
            if ver and ver >= submenu_ver:
                return
            submenu = create_get_help_submenu(menu)
            menu.insertMenu(act, submenu)
            menu.removeAction(act)
            new_act = submenu.menuAction()
            new_act.setProperty(submenu_property, True)
            new_act.setProperty("version", submenu_ver)
            return
    else:
        submenu = create_get_help_submenu(menu)
        menu.addMenu(submenu)
        new_act = submenu.menuAction()
        new_act.setProperty(submenu_property, True)
        new_act.setProperty("version", submenu_ver)


def get_anking_menu() -> QMenu:
    """Get or create AnKing menu. Make sure its submenus are up to date."""
    menu_name = "&AnKing"
    menubar = mw.form.menubar

    submenus = menubar.findChildren(QMenu)
    for sub_menu in submenus:
        if sub_menu.title() == menu_name:
            menu = sub_menu
            break
    else:
        menu = menubar.addMenu(menu_name)

    maybe_add_get_help_submenu(menu)
    return menu


def SettingsDialogExecute():
    SettingsDialog(mw)


def init_settings_dialog():
    menu = get_anking_menu()
    a = QAction("Field Autocomplete", mw)
    a.triggered.connect(SettingsDialogExecute)
    menu.addAction(a)
