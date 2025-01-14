const toggleButton = document.querySelector('#toggleSidebar'); 
const sidebar = document.querySelector('.sidebar');

// 切換側邊欄顯示
toggleButton.addEventListener('click', (e) => {
    e.stopPropagation(); // 阻止事件冒泡，避免觸發文檔點擊事件
    toggleButton.classList.toggle('active'); // 漢堡按鈕動畫
    sidebar.classList.toggle('active');     // 切換側邊欄顯示
});

// 點擊文檔其他地方自動收回側邊欄
document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active'); // 隱藏側邊欄
        toggleButton.classList.remove('active'); // 重置漢堡按鈕動畫
    }
});

// 防止點擊側邊欄時觸發文檔點擊事件
sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});
