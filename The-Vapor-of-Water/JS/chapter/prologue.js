const title = document.querySelector('.title');
const languageSelect = document.getElementById('languageSelect');
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const settingOverlay = document.getElementById("setting-overlay");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const DEFAULT_LANG = "zh-TW";  // ✅ 確保與 paragraphs key 一致

// 文字內容
const paragraphs = {

// 繁字

    "zh-TW": [
        "這是我以前就有的想法的，想說若是百以四分是真的，而我就是那個被無序放逐到地球上的眾多小馬之一，那我的心情會是怎樣的呢？",
        "是驚喜？ 是恐懼？ 是困惑？ 還是...氣憤？",
        "我最近花了一些時間來構思我腦中的同人小說，現在是時候開始寫出來了！",
        "這是關於一匹不那麼普通的小馬的故事。她被無序貶至地球，一個被用作囚禁小馬靈魂的監獄，而這片土地就是台灣。",
        "主角擁有與眾不同的天賦，她是一匹飛馬，卻能與水元素互動，這是其他飛馬無法做到的。她能控制水蒸氣，將其凝結成水或冰，靈活地用於保護朋友或攻擊敵人。雖然她並不像獨角獸那樣能直接施展魔法，但她對自己的能力感到自豪，心想：“沒有獨角又怎樣呢？”",
        "她雖然沒有像獨角獸有直接施展魔法的能力，但鑑於自己擁有的天賦，還是可以自豪地說“沒有獨角又怎麼樣呢？”",
        "是的！我寫這個小說不是為了凸顯原創角色，而是為了致敬我對這個系列的熱愛。",
        "她雖然是本作的主角，但也能是整個系列的旁觀者之一。有些小馬的命運因她改變，但更多的是她的命運被其他小馬左右。",
        "至於M6，她們雖然不是本作的主要角色，但在故事中的戲份絕不會少。同樣地，雙姊妹公主及其他次要角色也會有所出場，讓故事更加豐富。",
        "再來你沒看錯！故事的發生地就是在台灣，被丟到這片陌生土地的小馬會經歷怎樣的冒險呢？這正是我希望探索的部分。",
        "此外，我計劃在這個框架下，在加寫一個沒有出現過的角色(至少我還沒看到啦！)，她的出現或許會引發一些蝴蝶效應，但我會盡量不影響原作的完整性。她的加入會為故事帶來哪些趣味與變化，值得期待！",
        "<div style='margin-bottom: 4em;'>總而言之，我希望這部小說能為讀者帶來愉快的閱讀體驗，並從中汲取一些樂趣！</div>",
    ],

// 簡字

    "zh-CN": [
        "这是我以前就有的想法的，想说若是百以四分是真的，而我就是那个被无序放逐到地球上的众多小马之一，那我的心情会是怎样的呢？",
        "是惊喜？ 是恐惧？ 是困惑？ 还是...气愤？",
        "我最近花了一些时间来构思我脑中的同人小说，现在是时候开始写出来了！",
        "这是关于一匹不那麽普通的小马的故事。她被无序贬至地球，一个被用作囚禁小马灵魂的监狱，而这片土地就是台湾。",
        "主角拥有与众不同的天赋，她是一匹飞马，却能与水元素互动，这是其他飞马无法做到的。她能控制水蒸气，将其凝结成水或冰，灵活地用于保护朋友或攻击敌人。虽然她并不像独角兽那样能直接施展魔法，但她对自己的能力感到自豪，心想：“没有独角又怎样呢？”",
        "她虽然没有像独角兽有直接施展魔法的能力，但鑑于自己拥有的天赋，还是可以自豪地说“没有独角又怎麽样呢？”",
        "是的！我写这个小说不是为了凸显原创角色，而是为了致敬我对这个系列的热爱。",
        "她虽然是本作的主角，但也能是整个系列的旁观者之一。有些小马的命运因她改变，但更多的是她的命运被其他小马左右。",
        "至于M6，她们虽然不是本作的主要角色，但在故事中的戏份绝不会少。同样地，双姊妹公主及其他次要角色也会有所出场，让故事更加丰富。",
        "再来你没看错！故事的发生地就是在台湾，被丢到这片陌生土地的小马会经历怎样的冒险呢？这正是我希望探索的部分。",
        "此外，我计划在这个框架下，在加写一个没有出现过的角色(至少我还没看到啦！)，她的出现或许会引发一些蝴蝶效应，但我会尽量不影响原作的完整性。她的加入会为故事带来哪些趣味与变化，值得期待！",
        "<div style='margin-bottom: 4em;'>总而言之，我希望这部小说能为读者带来愉快的阅读体验，并从中汲取一些乐趣！</div>",
    ]
};

function renderText(lang) {
    console.log("🌍 渲染語言:", lang);
    console.log("📜 paragraphs 內容:", paragraphs);
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
document.getElementById("languageSelect").addEventListener("change", function() {
    const selectedLang = this.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    renderText(selectedLang);
    updateSettingsText(selectedLang); // 更新設定窗口的文本
    updateButtonText(selectedLang); // 更新章節目錄按鈕文本
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
    const savedLang = localStorage.getItem("selectedLanguage") || "zh-TW"; // 預設為 zh-TW
    console.log("🌍 預設語言:", savedLang);

    document.querySelector("#languageSelect").value = savedLang;
    renderText(savedLang);
    updateSettingsText(savedLang); // 更新設定窗口的文本
    updateButtonText(savedLang); // 更新章節目錄按鈕文本
});


// **設定按鈕功能**
settingsBtn.addEventListener("click", function () {
    settingsModal.style.display = "block";
    settingOverlay.style.display = "block"; // 顯示背景遮罩
});

// **開啟設定視窗**
function openSettings() {
    document.getElementById("settingsModal").style.display = "block";
    document.getElementById("setting-overlay").style.display = "block";
}

// **關閉設定視窗**
function closeSettings() {
    settingsModal.style.display = "none";
    settingOverlay.style.display = "none"; // 隱藏背景遮罩
}

// **關閉按鈕監聽**
closeSettingsBtn.addEventListener("click", closeSettings);
settingOverlay.addEventListener("click", closeSettings); // 點擊遮罩時也關閉

//創作期間2024/12/24
//上傳時間2024/12/24