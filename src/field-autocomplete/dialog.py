import webbrowser

from anki import version as anki_version
from aqt import mw
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

from .gui.forms.anki21.settings_dialog import Ui_Dialog
from .gui.resources.anki21 import icons_rc  # type: ignore
from .user_config import getDefaultConfig, getUserOption, writeConfig

conf = getUserOption()


class SettingsDialog(QDialog):

    timer = None

    def __init__(self, parent):
        QDialog.__init__(self, mw, Qt.Window)
        mw.setupDialogGC(self)
        self.mw = mw
        self.parent = parent
        self.setupDialog()
        self.loadConfigData()
        self.setupConnections()

        self.exec_()

    def setupDialog(self):
        self.form = Ui_Dialog()
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
            webbrowser.open('https://www.ankingmed.com')
        elif site == "youtube":        
            webbrowser.open('https://www.youtube.com/theanking')
        elif site == "patreon":        
            webbrowser.open('https://www.patreon.com/ankingmed')
        elif site == "instagram":        
            webbrowser.open('https://instagram.com/ankingmed')
        elif site == "facebook":        
            webbrowser.open('https://facebook.com/ankingmed')
        elif site == "video":        
            webbrowser.open('https://youtu.be/5XAq0KpU3Jc')
        elif site == "palace":        
            webbrowser.open('https://courses.ankipalace.com/?utm_source=anking_autocomplete_add-on&utm_medium=anki_add-on&utm_campaign=mastery_course')

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


def openWeb1():
    webbrowser.open(
        'https://courses.ankipalace.com/?utm_source=anking_bg_add-on&utm_medium=anki_add-on&utm_campaign=mastery_course')


def openWeb2():
    webbrowser.open('https://www.ankipalace.com/memberships')


def openWeb3():
    webbrowser.open('https://www.ankipalace.com/tutoring')


def getMenu(parent, menuName):
    menu = None
    for a in parent.form.menubar.actions():
        if menuName == a.text():
            menu = a.menu()
            break
    if not menu:
        menu = parent.form.menubar.addMenu(menuName)
    return menu


def getSubMenu(menu, subMenuName):
    for a in menu.actions():
        if subMenuName == a.text():
            return a.menu()
    else:
        subMenu = QMenu(subMenuName, menu)
        menu.addMenu(subMenu)
        return subMenu


def SettingsDialogExecute():
    SettingsDialog(mw)


def init_settings_dialog():
    MENU_OPTIONS = (  # CONF_KEY, TITLE, CALLBACK
        ("", "Online Mastery Course", openWeb1),
        ("", "Daily Q and A Support", openWeb2),
        ("", "1-on-1 Tutoring", openWeb3)
    )
    menu_name = "&AnKing"
    menu = getMenu(mw, menu_name)
    submenu = getSubMenu(menu, "Get Anki Help")
    for _, title, cb in MENU_OPTIONS:
        if title in [x.text() for x in submenu.actions()]:
            continue

        hk = QKeySequence()
        act = QAction(title, mw)
        act.setShortcut(QKeySequence(hk))
        act.triggered.connect(cb)
        submenu.addAction(act)
    a = QAction("Field Autocomplete", mw)
    a.triggered.connect(SettingsDialogExecute)
    menu.addAction(a)
