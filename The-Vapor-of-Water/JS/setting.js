const title = document.querySelector('.title');
const languageSelect = document.getElementById('languageSelect');
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const settingOverlay = document.getElementById("setting-overlay");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const DEFAULT_LANG = "zh-TW";  // ✅ 確保與 paragraphs key 一致

function renderText(lang) {
    console.log("🌍 渲染語言:", lang);
    console.log("📜 渲染內容:", paragraphs[lang]);

    if (!paragraphs[lang]) {
        console.error(`❌ 錯誤: 找不到 ${lang} 對應的內容！`);
        return;
    }

    window.location.hash = lang === "zh-TW" ? "#zh-TW" : "#zh-CN";

    languageSelect.addEventListener("change", function() {
        const selectedLang = this.value;
        localStorage.setItem("selectedLanguage", selectedLang);
    });

    // **刪除舊的 <p>**
    let nextElement = title.nextSibling;
    while (nextElement) {
        let temp = nextElement.nextSibling;
        if (nextElement.tagName === "P") {
            nextElement.remove();
        }
        nextElement = temp;
    }

    // **插入新的內容**
    paragraphs[lang].slice().reverse().forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        title.parentNode.insertBefore(paragraph, title.nextSibling);
    });
    countChineseCharacters();  // 語言變更後重新計算字數
}

// **語言切換**
languageSelect.addEventListener("change", function() {
    const selectedLang = this.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    renderText(selectedLang);
    updateSettingsText(selectedLang);
    updateButtonText(selectedLang);
    window.location.hash = selectedLang === "zh-TW" ? "#zh-TW" : "#zh-CN";
});

// **更新設定窗口語言文本**
function updateSettingsText(lang) {
    if (lang === "zh-TW") {
        document.getElementById('settingsTitle').textContent = '設定';
        document.getElementById('settingsLabel').textContent = '選擇語言：';
        document.getElementById('toggleDarkMode').textContent = '切換暗色模式';
        document.getElementById('closeSettingsBtn').textContent = '關閉';
    } else if (lang === "zh-CN") {
        document.getElementById('settingsTitle').textContent = '设置';
        document.getElementById('settingsLabel').textContent = '选择语言：';
        document.getElementById('toggleDarkMode').textContent = '切换暗色模式';
        document.getElementById('closeSettingsBtn').textContent = '关闭';
    }
}

// **更新章節目錄按鈕文本**
function updateButtonText(lang) {
    const toggleSidebarButton = document.querySelector('.toggleSidebar');
    const SettingButton = document.querySelector('#settingsBtn');
    const menutext = document.querySelector('menu');
    if (lang === "zh-TW") {
        toggleSidebarButton.textContent = '章節目錄';
        menutext.textContent = '章節目錄';
        SettingButton.textContent = '設定';
    } else if (lang === "zh-CN") {
        toggleSidebarButton.textContent = '章节目录';
        menutext.textContent = '章节目录';
        SettingButton.textContent = '设置';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const urlHash = window.location.hash;
    let savedLang = localStorage.getItem("selectedLanguage");

    // 如果 URL hash 是 #zh-TW 或 #zh-CN，使用該語言
    if (urlHash === "#zh-TW" || urlHash === "#zh-CN") {
        savedLang = urlHash.replace("#", "");
    }

    // 若沒有 hash 或 localStorage 沒有語言設定，預設為 zh-TW
    if (!savedLang) {
        savedLang = "zh-TW";
    }

    console.log("🌍 預設語言:", savedLang);

    languageSelect.value = savedLang;
    window.location.hash = savedLang === "zh-TW" ? "#zh-TW" : "#zh-CN";
    renderText(savedLang);
    updateSettingsText(savedLang);
    updateButtonText(savedLang);

    if (localStorage.getItem("settingsOpen") === "true") {
        settingsModal.style.display = "block";
        settingOverlay.style.display = "block";
        localStorage.removeItem("settingsOpen"); // 🔥 只執行一次，避免影響後續行為
    }
});

// **設定按鈕功能**
function closeSettings() {
    settingsModal.style.display = "none";
    settingOverlay.style.display = "none";
}
function openSettings() {
    settingsModal.style.display = "block";
    settingOverlay.style.display = "block";
}

closeSettingsBtn.addEventListener("click", closeSettings);
settingOverlay.addEventListener("click", closeSettings);
