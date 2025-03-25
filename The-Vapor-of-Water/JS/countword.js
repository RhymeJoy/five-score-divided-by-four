function countChineseCharacters() {
    // 獲取指定元素的文本內容
    let content = document.getElementById("content").innerText;
    
    // 排除掉特定的結尾部分，使用正則表達式
    content = content.replace(/中文字數：.*$/s, '');  // 移除中文字數顯示
    content = content.replace(/中文字数：.*$/s, '');  // 移除中文字數顯示

    // 正則表達式，匹配所有的中文字符
    const chineseCharacters = content.match(/[\u4e00-\u9fa5]/g) || [];
    // 顯示中文字符的數量
    document.getElementById("chineseCount").textContent = chineseCharacters.length;
}

// 當頁面加載完成後執行中文字符數的計算
window.addEventListener("load", countChineseCharacters);