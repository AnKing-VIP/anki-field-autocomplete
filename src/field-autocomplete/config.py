from aqt import mw

name = __name__.split('.')[0]


def get(key):
    config = mw.addonManager.getConfig(name)
    try:
        return config[_current_profile_name()][key]
    except KeyError:
        return None


def remove(key):
    config = mw.addonManager.getConfig(name)
    try:
        del config[_current_profile_name()][key]
    except KeyError:
        return None
    mw.addonManager.writeConfig(name, config)


def set(key, value):
    config = mw.addonManager.getConfig(name)
    if config.get(_current_profile_name(), None) is not None:
        config[_current_profile_name()][key] = value
    else:
        config[_current_profile_name()] = {key: value}
    mw.addonManager.writeConfig(name, config)


def _current_profile_name():
    return mw.pm.name
