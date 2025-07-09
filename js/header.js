document.addEventListener('DOMContentLoaded', function () {
  // 取得所有 .menu-button（下拉選單的點擊按鈕）
  const menuButtons = document.querySelectorAll('.dropdown .menu-button');

  // 移動版選單容器（側邊欄）
  const mobileNav = document.querySelector('.mobile-nav');

  // ☰ 漢堡選單按鈕
  const menuToggle = document.querySelector('.menu-toggle');

  // ✖ 關閉選單按鈕
  const closeButton = document.querySelector('.close-button');

  // 灰色半透明背景區域（點它可關閉選單）
  const overlay = document.getElementById('press_show_cute');

  // 🔽 綁定所有下拉選單按鈕的點擊事件
  menuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const menu = button.nextElementSibling;

      // ✅ 把 menu 從原本的 .mobile-nav 移到 <body>
      if (!document.body.contains(menu)) {
        document.body.appendChild(menu);
      }

      // ✅ 取得按鈕在畫面的位置
      const rect = button.getBoundingClientRect();

      // ✅ 定位 dropdown 在按鈕下方
      menu.style.position = 'fixed';
      menu.style.top = `${rect.bottom}px`;
    // ✅ 改為靠「left」對齊 button 左邊
      menu.style.left = `${rect.left-500}px`;
      menu.style.right = 'auto'; // 保險起見，移除右側對齊
      menu.style.width = 'auto'; // 讓它根據內容寬度自動決定
      menu.style.zIndex = '9999';

      // ✅ 關閉其他 dropdown
      document.querySelectorAll('.popup-menu.nav-menu').forEach(m => {
        if (m !== menu) m.classList.remove('show');
      });

      // ✅ 切換當前 dropdown 顯示狀態
      menu.classList.toggle('show');
    });
  });


  // ❌ 點擊畫面任意區域時，自動關閉所有下拉選單
  document.addEventListener('click', () => {
    document.querySelectorAll('.popup-menu.nav-menu').forEach(menu => {
      menu.classList.remove('show');
    });
  });

  // ☰ 點擊漢堡選單時，開啟 mobileNav 與灰色背景
  menuToggle.addEventListener('click', function () {
    mobileNav.classList.add('active'); // 顯示移動版選單
    overlay.classList.add('overlay-background'); // 顯示遮罩背景
  });

  // ✖ 點擊關閉按鈕時，關閉選單與背景
  closeButton.addEventListener('click', function () {
    mobileNav.classList.remove('active');
    overlay.classList.remove('overlay-background');
  });

  // 🕳️ 點擊灰色背景時，也要關閉選單與背景
  overlay.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('overlay-background');
  });

  // 💖 點擊 header 任意區域時，顯示一張圖片（愛心）
  const header = document.querySelector('header');

  header.addEventListener('click', (event) => {
    const x = event.clientX; // 點擊位置的 X 座標
    const y = event.clientY; // 點擊位置的 Y 座標

    // 建立圖片元素
    const img = document.createElement('img');
    img.src = '/images/3.png'; // 愛心圖片路徑（可自訂）
    img.style.position = 'absolute';
    img.style.left = `${x - 25}px`; // 將圖片置中顯示在點擊位置
    img.style.top = `${y - 25}px`;
    img.style.width = '50px';
    img.style.height = '50px';

    overlay.appendChild(img); // 把圖片加進 overlay（遮罩層級較高）

    // 設定 800 毫秒後移除圖片
    setTimeout(() => {
      img.remove();
    }, 800);
  });
});
