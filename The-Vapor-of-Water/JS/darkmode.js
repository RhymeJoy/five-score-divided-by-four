document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkMode = document.querySelector('#toggleDarkMode'); // 更改按鈕 ID
    const elements = document.querySelectorAll('.line-footer, .img, .container, .sidebar, .sidebar menu, .navbar-black, .navbar-head, footer, .line');
    const bodyElement = document.body;

    // 初始化模式
    const mode = localStorage.getItem('mode'); // 從 localStorage 獲取模式
    if (mode === 'dark') {
        applyDarkMode(true);
    } else {
        applyDarkMode(false);
    }

    toggleDarkMode.addEventListener('click', () => {
        const isDarkMode = bodyElement.classList.toggle('dark'); // 切換主體模式
        elements.forEach(el => el.classList.toggle('dark')); // 切換所有相關元素模式

        // 儲存模式到 localStorage
        if (isDarkMode) {
            localStorage.setItem('mode', 'dark'); // 儲存暗色模式
            toggleDarkMode.textContent = '切換亮色模式';
        } else {
            localStorage.setItem('mode', 'light'); // 儲存亮色模式
            toggleDarkMode.textContent = '切換暗色模式';
        }
    });

    // 套用模式的函數
    function applyDarkMode(isDarkMode) {
        if (isDarkMode) {
            bodyElement.classList.add('dark');
            elements.forEach(el => el.classList.add('dark'));
            toggleDarkMode.textContent = '切換亮色模式';
        } else {
            bodyElement.classList.remove('dark');
            elements.forEach(el => el.classList.remove('dark'));
            toggleDarkMode.textContent = '切換暗色模式';
        }
    }
});