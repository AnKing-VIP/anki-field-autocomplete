import webbrowser

from aqt import mw
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

from .gui.forms.anki21.settings_dialog import Ui_Dialog
from .user_config import (addon_path, getDefaultConfig, getUserOption,
                          writeConfig)

conf = getUserOption()

class SettingsDialog(QDialog):

    def __init__(self, parent):
        QDialog.__init__(self, mw, Qt.Window)
        mw.setupDialogGC(self)
        self.mw = mw
        self.parent = parent
        self.setupDialog()
        self.loadConfigData()
        # self.setupConnections()

        self.exec_()

    def setupDialog(self):
        self.form = Ui_Dialog()
        self.form.setupUi(self)

    def loadConfigData(self):
        f = self.form

        # Checkboxes -------------
        c = conf['search_mode_strict']
        if f.checkBox_search_mode.isChecked() != c:
            f.checkBox_search_mode.click()

        # LineEdits -------------
        t = conf["toggle_ac_shortcut"]
        f.toggle_ac_shortcut_lineedit.setText(t)

def openWeb1():
    webbrowser.open('https://courses.ankipalace.com/?utm_source=anking_bg_add-on&utm_medium=anki_add-on&utm_campaign=mastery_course')

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

def setup_menu():
    MENU_OPTIONS=( # CONF_KEY, TITLE, CALLBACK
        ("", "Online Mastery Course", openWeb1),
        ("", "Daily Q and A Support", openWeb2),
        ("", "1-on-1 Tutoring", openWeb3)
    )
    menu_name = "&AnKing"
    menu = getMenu(mw, menu_name)
    submenu = getSubMenu(menu, "Get Anki Help")
    for k,t,cb in MENU_OPTIONS:
        hk=QKeySequence()
        act=QAction(t,mw)
        act.setShortcut(QKeySequence(hk))
        act.triggered.connect(cb)
        submenu.addAction(act)
    a = QAction("Field Autocomplete", mw)
    a.triggered.connect(SettingsDialogExecute)
    menu.addAction(a)