from .dialog import init_settings_dialog
from .editor import init_editor
from .gui.resources import initialize_qt_resources
from .webview import init_webview

initialize_qt_resources()
init_editor()
init_webview()
init_settings_dialog()