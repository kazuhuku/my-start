// 要素の取得
const zoomableImgs = document.querySelectorAll('.zoomable-img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');

// ページ内のすべての拡大対象画像にクリックイベントを設定
zoomableImgs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// モーダル（背景または閉じるボタン）をクリックしたら閉じる
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});