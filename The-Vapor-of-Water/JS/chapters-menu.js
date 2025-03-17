const chapters = [
    { title: "作者前言",                 href: "index.html" },
    { title: "第一章：南港小馬展",        href: "Chapter1.html" },
    { title: "第二章：身世謎題[上]",      href: "Chapter2.html" },
    { title: "第三章：身世謎題[中]",      href: "Chapter3.html" },
    { title: "第四章：身世謎題[下]",      href: "Chapter4.html" },
    { title: "第五章：異變日增[上]",      href: "Chapter5.html" },
    { title: "第六章：異變日增[下]",      href: "Chapter6.html" },
    { title: "第七章：空中之旅",          href: "Chapter7.html" },
    { title: "第八章：無盡的噩夢",        href: "Chapter8.html" },
    { title: "第九章：溫哥華",            href: "Chapter9.html" },
    { title: "第十章：非法入境",          href: "Chapter10.html" },
    { title: "第十一章：短暫的休憩",      href: "Chapter11.html" },
    { title: "第十二章：重拾記憶",        href: "Chapter12.html" },
    { title: "第十三章：接受自我",        href: "Chapter13.html" },
    { title: "第十四章：從長計議",        href: "Chapter14.html" },
    // { title: "第十五章：手稿的意義",       href: "Chapter15.html" },
    // { title: "第十六章：新朋友",   href: "Chapter16.html" },
    // { title: "第十七章：",   href: "Chapter17.html" },
    // { title: "第十八章：",   href: "Chapter18.html" },
    // { title: "第十九章：",   href: "Chapter19.html" },
    // { title: "第二十章：",   href: "Chapter20.html" },
    // { title: "第二十一章：", href: "Chapter21.html" },
    // { title: "第二十二章：", href: "Chapter22.html" },
    // { title: "第二十三章：", href: "Chapter23.html" },
    // { title: "第二十四章：", href: "Chapter24.html" },
    // { title: "第二十五章：", href: "Chapter25.html" },
];

const chapterList = document.getElementById('chapterList');
const chapterLinks = []; // 用於存儲所有章節鏈接

// 動態插入章節
chapters.forEach((chapter, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = chapter.href;
    
    // 除「作者前言」外的章節加上編號
    if (index > 0) {
        link.textContent = `${index}.${chapter.title}`;
    } else {
        link.textContent = chapter.title;
    }

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

// 選取上一章和下一章按鈕
const prevButton = document.getElementById('prevChapter');
const nextButton = document.getElementById('nextChapter');

// 找到當前章節的索引
const currentChapterIndex = chapters.findIndex(chapter => chapter.href === currentPath);

// 設置按鈕的跳轉邏輯和顯示狀態
if (currentChapterIndex > 0) {
    // 當前章節不是第一章時，設定上一章按鈕的行為
    prevButton.onclick = () => {
        window.location.href = chapters[currentChapterIndex - 1].href;
    };
    prevButton.style.visibility = 'visible';  // 顯示上一章按鈕
} else {
    // 如果是第一章，隱藏「上一章」按鈕
    prevButton.style.visibility = 'hidden';
}

if (currentChapterIndex < chapters.length - 1) {
    // 當前章節不是最後一章時，設定下一章按鈕的行為
    nextButton.onclick = () => {
        window.location.href = chapters[currentChapterIndex + 1].href;
    };
    nextButton.style.visibility = 'visible'; // 顯示下一章按鈕
} else {
    // 如果是最後一章，隱藏「下一章」按鈕
    nextButton.style.visibility = 'hidden';
}

// footer
const footer = document.createElement('footer');

const paragraph = document.createElement('p');
paragraph.innerHTML = '&copy; 2024-2025 欣韻 , All rights reserved.';

footer.appendChild(paragraph);
document.body.appendChild(footer);
