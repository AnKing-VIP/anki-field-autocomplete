# -*- coding: utf-8 -*-

# Review Heatmap Add-on for Anki
#
# Copyright (C) 2016-2020  Aristotelis P. <https//glutanimate.com/>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version, with the additions
# listed at the end of the accompanied license file.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
# NOTE: This program is subject to certain additional terms pursuant to
# Section 7 of the GNU Affero General Public License.  You should have
# received a copy of these additional terms immediately following the
# terms and conditions of the GNU Affero General Public License which
# accompanied this program.
#
# If not, please request a copy through one of the means of contact
# listed here: <https://glutanimate.com/contact/>.
#
# Any modifications to this file must keep this entire header intact.

"""
Options dialog and associated components
"""


from aqt import mw
from aqt.qt import *

from ..config import config
from ..libaddon.anki import ANKI
from ..libaddon.gui.dialogs.options import OptionsDialog
from .forms.anki21 import options as qtform_options

__all__ = ["RevHmOptions", "invokeOptionsDialog"]


class RevHmOptions(OptionsDialog):

    """
    Add-on-specific options dialog implementation
    """

    _mapped_widgets = (
        ("form.checkBox_search_mode", (("value", {"dataPath": "synced/loose_search"}),)),
        ("form.keyGrabToggle", (("value", {"dataPath": "profile/hotkeys/toggle"}),)),
    )

    def __init__(self, config, mw, parent=None, **kwargs):
        # Mediator methods defined in mapped_widgets might need access to
        # certain instance attributes. As super().__init__ calls these
        # mediator methods it is important that we set the attributes
        # beforehand:
        self.parent = parent or mw
        self.mw = mw
        super(RevHmOptions, self).__init__(
            self._mapped_widgets,
            config,
            form_module=qtform_options,
            parent=self.parent,
            **kwargs
        )
        # Instance methods that modify the initialized UI should either be
        # called from self._setupUI or from here

    # UI adjustments
    def _setupUI(self):
        super(RevHmOptions, self)._setupUI()

        # manually adjust title label font sizes on Windows
        # gap between default windows font sizes and sizes that work well
        # on Linux and macOS is simply too big
        # TODO: find a better solution
        if ANKI.PLATFORM == "win":
            default_size = QApplication.font().pointSize()
            for label in [self.form.fmtLabContrib, self.form.labHeading]:
                font = label.font()
                font.setPointSize(int(default_size * 1.5))
                label.setFont(font)


def invokeOptionsDialog(parent=None):
    """Call settings dialog"""
    dialog = RevHmOptions(config, mw, parent=parent)
    return dialog.exec_()


def initializeOptions():
    config.setConfigAction(invokeOptionsDialog)
    # Set up menu entry:
    options_action = QAction("Field Autocompmlete Options", mw)
    options_action.triggered.connect(lambda _: invokeOptionsDialog())
    mw.form.menuTools.addAction(options_action)
