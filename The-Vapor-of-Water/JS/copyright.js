    document.addEventListener('copy', function(e) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', '');
        alert('複製是被禁止的喔！你這個小調皮！');
    });

    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        alert('有誰說你可以拖拽的阿！你真的學不乖喔！');
    });