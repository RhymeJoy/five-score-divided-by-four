document.addEventListener('DOMContentLoaded', () => { // 等到 DOM 加載完成
    const toggleOpacity = document.querySelector('#toggleOpacity');
    const blackElement = document.querySelector('.img');
    const containerElement = document.querySelector('.container');
    const sidebarElement = document.querySelector('.sidebar');
    const menuElement = document.querySelector('.sidebar menu');
    const headerimgElement = document.querySelector('.navbar-black');
    const headertextElement = document.querySelector('.navbar-head');
    const footerElement = document.querySelector('footer');
    const lineElement = document.querySelector('.line');

    // console.log(toggleOpacity, blackElement, containerElement, sidebarElement, menuElement, headerimgElement, lineElement);

    toggleOpacity.addEventListener('click', () => {
        // console.log('Button clicked');
        blackElement.classList.toggle('dark');
        containerElement.classList.toggle('dark');
        sidebarElement.classList.toggle('dark');
        menuElement.classList.toggle('dark');
        headerimgElement.classList.toggle('dark');
        headertextElement.classList.toggle('dark');
        toggleOpacity.classList.toggle('dark');
        footerElement.classList.toggle('dark');
        lineElement.classList.toggle('dark');

        if (blackElement.classList.contains('dark')) {
            toggleOpacity.textContent = '切換亮色模式';
            // setTimeout(() => {
            //     alert('已套用暗色模式！');
            // }, 400);
        } else {
            toggleOpacity.textContent = '切換暗色模式';
            // setTimeout(() => {
            //     alert('已套用亮色模式！');
            // }, 400);
        }
    });
});