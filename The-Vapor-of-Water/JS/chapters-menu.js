const chapters = [
    { title: "作者前言", href: "Prologue.html" },
    { title: "1.第一章：南港小馬展",   href: "Chapter1.html" },
    { title: "2.第二章：身世謎題[上]", href: "Chapter2.html" },
    // { title: "3.第三章：身世謎題[下]", href: "Chapter3.html" },
];

const chapterList = document.getElementById('chapterList');

        // 動態插入章節
        chapters.forEach(chapter => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = chapter.href;
            link.textContent = chapter.title;
            listItem.appendChild(link);
            chapterList.appendChild(listItem);
        });