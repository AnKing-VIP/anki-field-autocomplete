from typing import Optional

from aqt.addons import AddonsDialog
from aqt.gui_hooks import addons_dialog_will_show

addons_current: Optional[AddonsDialog] = None


def save_addons_window(addons):
    global addons_current
    addons_current = addons


def init_addon_manager():
    addons_dialog_will_show.append(save_addons_window)