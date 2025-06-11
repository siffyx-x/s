document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirmButton');
    const denyButton = document.getElementById('denyButton');
    const messageDisplay = document.getElementById('message');

    // 「はい」ボタンがクリックされた時の処理
    confirmButton.addEventListener('click', () => {
        // の紹介ページに直接遷移
        const nextPageUrl = ‘slyrs.html';
        window.location.href = nextPageUrl;
    });
});
