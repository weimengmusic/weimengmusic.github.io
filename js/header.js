document.addEventListener('DOMContentLoaded', function () {
  // 取得 DOM 元素
  const navMenu = document.querySelector('.nav-menu'); // 下拉選單容器
  const menuButton = document.querySelector('.menu-button'); // 點擊展開下拉選單的按鈕
  const menuToggle = document.querySelector('.menu-toggle'); // ☰ 漢堡選單按鈕
  const mobileNav = document.querySelector('.mobile-nav'); // 移動版選單區塊
  const closeButton = document.querySelector('.close-button'); // 關閉選單按鈕 ✖
  const overlay = document.getElementById('press_show_cute'); // 半透明灰背景容器

  // 點擊「下拉選單按鈕」時，顯示或隱藏下拉選單（nav-menu）
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 防止點擊事件傳播到 document（避免馬上關閉選單）
    navMenu.classList.toggle('show'); // 切換下拉選單的顯示/隱藏狀態
  });

  // 點擊畫面其他地方時，隱藏下拉選單
  document.addEventListener('click', () => {
    navMenu.classList.remove('show'); // 強制隱藏選單
  });

  // 點擊 ☰ 漢堡選單按鈕時，顯示 mobileNav 並加上透明灰背景
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.add('active'); // 顯示移動版選單
    overlay.classList.add('overlay-background'); // 加上灰背景樣式（半透明）
  });

  // 點擊 ✖ 關閉按鈕時，隱藏選單和灰背景
  closeButton.addEventListener('click', function() {
    mobileNav.classList.remove('active'); // 隱藏移動版選單
    overlay.classList.remove('overlay-background'); // 移除灰背景
  });

  // 點擊透明灰背景時，也要關閉選單和背景
  overlay.addEventListener('click', () => {
    mobileNav.classList.remove('active'); // 隱藏選單
    overlay.classList.remove('overlay-background'); // 隱藏背景
  });

  // 點擊 header 任意位置，顯示圖片（你原本的小圖圖點擊特效）
  const header = document.querySelector('header');

  header.addEventListener('click', (event) => {
    const x = event.clientX; // 滑鼠點擊位置的 X 座標
    const y = event.clientY; // 滑鼠點擊位置的 Y 座標

    // 創建圖片元素
    const img = document.createElement('img');
    img.src = '/images/3.png'; // 設定圖片來源
    img.style.position = 'absolute'; // 絕對定位
    img.style.left = `${x - 25}px`; // 將圖片置於點擊位置附近
    img.style.top = `${y - 25}px`;
    img.style.width = '50px'; // 設定圖片寬高
    img.style.height = '50px';

    overlay.appendChild(img); // 將圖片加入 overlay 容器中（層級較高）

    // 設定 800ms 後自動移除圖片
    setTimeout(() => {
      img.remove();
    }, 800);
  });
});
