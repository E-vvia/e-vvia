
const themeSwitcherReloaders = [];


function reloadSwitchers() {
    themeSwitcherReloaders.forEach(reloader => reloader());
}

function setupThemeSwitcher(id) {
    const themeSwicher = document.getElementById(id);
    const moonIcon = document.getElementById(id + "-moon-icon");
    const sunIcon = document.getElementById(id + "-sun-icon");
    const systemIcon = document.getElementById(id + "-system-icon");
    // @ts-ignore
    

    themeSwicher?.addEventListener("click", () => {
        hideIcons();
        let currentTheme = window.themeManager.getTheme();
        let newTheme;
        if (currentTheme == "dark") {
            newTheme = "light";
        } else if (currentTheme == "light") {
            newTheme = "system";
        } else {
            newTheme = "dark";
        }
        currentTheme = newTheme;
        window.themeManager.setTheme(newTheme);
        window.themeManager.saveTheme(newTheme);
        showCurrentThemeIcon();
    });

    function hideIcons() {
        moonIcon?.classList.add("hidden");
        sunIcon?.classList.add("hidden");
        systemIcon?.classList.add("hidden");
    }

    function showCurrentThemeIcon() {
        let currentTheme = window.themeManager.getTheme();
        if (currentTheme == "dark") {
            moonIcon?.classList.remove("hidden");
        } else if (currentTheme == "light") {
            sunIcon?.classList.remove("hidden");
        } else {
            systemIcon?.classList.remove("hidden");
        }
    }

    function reload() {
        hideIcons();
        showCurrentThemeIcon();
    }

    reload();

    themeSwitcherReloaders.push(reload);
}

window.themeSwicher = { setupThemeSwitcher, reloadSwitchers };