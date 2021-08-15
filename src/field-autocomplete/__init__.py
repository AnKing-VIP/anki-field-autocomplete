from .addon_manager import init_addon_manager
from .editor import init_editor
from .webview import init_webview
from .dialog import setup_menu

init_addon_manager()
init_editor()
init_webview()
setup_menu()
