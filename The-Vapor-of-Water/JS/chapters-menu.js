const chapters = [
    { title: "作者前言", href: "index.html" },
    { title: "1.第一章：南港小馬展",        href: "Chapter1.html" },
    { title: "2.第二章：身世謎題[上]",      href: "Chapter2.html" },
    { title: "3.第三章：身世謎題[中]",      href: "Chapter3.html" },
    { title: "4.第四章：身世謎題[下]",      href: "Chapter4.html" },
    // { title: "5.第五章：身世謎題[下]",      href: "Chapter5.html" },
    // { title: "6.第六章：身世謎題[下]",      href: "Chapter6.html" },
    // { title: "7.第七章：身世謎題[下]",      href: "Chapter7.html" },
    // { title: "8.第八章：身世謎題[下]",      href: "Chapter8.html" },
    // { title: "9.第九章：身世謎題[下]",      href: "Chapter9.html" },
    // { title: "10.第十章：身世謎題[下]",     href: "Chapter10.html" },
    // { title: "11.第十一章：身世謎題[下]",   href: "Chapter11.html" },
    // { title: "12.第十二章：身世謎題[下]",   href: "Chapter12.html" },
    // { title: "13.第十三章：身世謎題[下]",   href: "Chapter13.html" },
    // { title: "14.第十四章：身世謎題[下]",   href: "Chapter14.html" },
    // { title: "15.第十五章：身世謎題[下]",   href: "Chapter15.html" },
    // { title: "16.第十六章：身世謎題[下]",   href: "Chapter16.html" },
    // { title: "17.第十七章：身世謎題[下]",   href: "Chapter17.html" },
    // { title: "18.第十八章：身世謎題[下]",   href: "Chapter18.html" },
    // { title: "19.第十九章：身世謎題[下]",   href: "Chapter19.html" },
    // { title: "20.第二十章：身世謎題[下]",   href: "Chapter20.html" },
    // { title: "21.第二十一章：身世謎題[下]", href: "Chapter21.html" },
    // { title: "22.第二十二章：身世謎題[下]", href: "Chapter22.html" },
    // { title: "23.第二十三章：身世謎題[下]", href: "Chapter23.html" },
    // { title: "24.第二十四章：身世謎題[下]", href: "Chapter24.html" },
    // { title: "25.第二十五章：身世謎題[下]", href: "Chapter25.html" },
];

const chapterList = document.getElementById('chapterList');
const chapterLinks = []; // 用於存儲所有章節鏈接

// 動態插入章節
chapters.forEach(chapter => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = chapter.href;
    link.textContent = chapter.title;

    listItem.appendChild(link);
    chapterList.appendChild(listItem);
    chapterLinks.push(link); // 存入鏈接列表
});

// 根據當前 URL 高亮選中章節
const currentPath = window.location.pathname.split('/').pop(); // 獲取當前頁面文件名
chapterLinks.forEach(link => {
    if (link.href.includes(currentPath)) {
        link.classList.add('selected'); // 為當前頁面對應的鏈接添加選中樣式
    }
});
        