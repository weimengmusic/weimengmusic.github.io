
document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.querySelector('.nav-menu');
  const menuButton = document.querySelector('.menu-button');

  // 點擊下拉菜單按鈕顯示/隱藏菜單
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    navMenu.classList.toggle('show'); // 切換顯示狀態
  });

  // 點擊其他地方隱藏下拉菜單
  document.addEventListener('click', () => {
    navMenu.classList.remove('show'); // 隱藏選單
  });
  

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeButton = document.querySelector('.close-button');

  menuToggle.addEventListener('click', function() {
    // 切換菜單的顯示狀態
    mobileNav.classList.toggle('active');
  });

  // 點擊關閉按鈕關閉菜單
  closeButton.addEventListener('click', function() {
    mobileNav.classList.remove('active');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // 壓下去顯示圖案
  const header = document.querySelector('header');
  const imageContainer = document.getElementById('press_show_cute');

  header.addEventListener('click', (event) => {
    // 獲取游標的座標
    const x = event.clientX; // 游標的 X 軸位置
    const y = event.clientY; // 游標的 Y 軸位置

    // 創建新的圖片元素
    const img = document.createElement('img');
    img.src = '/images/dog0.png'; // 設定圖片來源
    img.style.position = 'absolute'; // 使圖片絕對定位
    
    // 設置圖片在游標旁邊的位置
    img.style.left = `${x - 25}px`; // 向右偏移10像素
    img.style.top = `${y - 25}px`; // 向上偏移25像素（根據圖片大小調整）
    
    // 設置圖片大小
    img.style.width = '30px'; // 設定寬度
    img.style.height = '30px'; // 設定高度
    
    imageContainer.appendChild(img); // 將圖片添加到容器中

    // 設定圖片的顯示時間，然後移除
    setTimeout(() => {
      img.remove();
    }, 800); // 2 秒後移除圖片
  });
});