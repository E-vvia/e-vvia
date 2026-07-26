const themes = ["light", "dark", "system"];

function themeManager() {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const localStorageKey = "theme";

    function setTheme(theme) {
        if (theme == 'system') {
            theme = media.matches ? "dark" : "light";
        }
        document.documentElement.dataset.theme = theme;
    }

    function saveTheme(theme) {
        localStorage.setItem(localStorageKey, theme);
    }

    function getTheme() {
        const saved = localStorage.getItem(localStorageKey);

        if (saved && themes.includes(saved)) {
            return saved;
        }

        return 'system';
    }

    function setSavedThemeOrSystem() {
        setTheme(getTheme());
    }

    function init() {
        setSavedThemeOrSystem();

        media.addEventListener("change", () => {
            setTheme(getTheme());
        });
    }

    return {
        init,
        setTheme,
        saveTheme,
        getTheme,
    };
}

const manager = themeManager();
manager.init();

window.themeManager = manager;
