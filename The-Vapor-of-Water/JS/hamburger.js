// 選取所有需要觸發的按鈕
const toggleButtons = document.querySelectorAll('.toggleSidebar');
const sidebar = document.querySelector('.sidebar');

// 切換側邊欄顯示
toggleButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡，避免觸發文檔點擊事件

        // 切換按鈕和側邊欄的 active 狀態
        toggleButtons.forEach((btn) => btn.classList.toggle('active')); // 切換所有按鈕的動畫
        sidebar.classList.toggle('active'); // 切換側邊欄顯示
    });
});

// 點擊文檔其他地方自動收回側邊欄
document.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active'); // 隱藏側邊欄
        toggleButtons.forEach((button) => button.classList.remove('active')); // 移除所有按鈕的 active 狀態
    }
});

// 防止點擊側邊欄時觸發文檔點擊事件
sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});
