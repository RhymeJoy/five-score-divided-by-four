let copyright = "off"; // 設定開關為 "on" 或 "off"

function toggleCopyright() {
    if (copyright === "on") {
        document.addEventListener('copy', handleCopy);
        document.addEventListener('dragstart', handleDragStart);
    } else {
        document.removeEventListener('copy', handleCopy);
        document.removeEventListener('dragstart', handleDragStart);
    }
}

function handleCopy(e) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', '');
    alert('複製是被禁止的喔！你這個小調皮！');
}

function handleDragStart(e) {
    e.preventDefault();
    alert('有誰說你可以拖拽的阿！你真的學不乖喔！');
}

// 根據 copyright 的值來啟動或禁用功能
toggleCopyright();