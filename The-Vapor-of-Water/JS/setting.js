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
}

// **語言切換**
languageSelect.addEventListener("change", function() {
    const selectedLang = this.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    renderText(selectedLang);
    updateSettingsText(selectedLang);
    updateButtonText(selectedLang);
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
    if (lang === "zh-TW") {
        toggleSidebarButton.textContent = '章節目錄';
        SettingButton.textContent = '設定';
    } else if (lang === "zh-CN") {
        toggleSidebarButton.textContent = '章节目录';
        SettingButton.textContent = '设置';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "zh-TW";
    console.log("🌍 預設語言:", savedLang);

    languageSelect.value = savedLang;
    renderText(savedLang);
    updateSettingsText(savedLang);
    updateButtonText(savedLang);
});

// **設定按鈕功能**
settingsBtn.addEventListener("click", function () {
    settingsModal.style.display = "block";
    settingOverlay.style.display = "block";
});

function closeSettings() {
    settingsModal.style.display = "none";
    settingOverlay.style.display = "none";
}

closeSettingsBtn.addEventListener("click", closeSettings);
settingOverlay.addEventListener("click", closeSettings);
