
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

  // 當頁面滾動時顯示/隱藏按鈕
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) { // 當滾動超過 50px 顯示按鈕
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // 當點擊按鈕時，滾動到頁面頂部
  scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'auto' });
  });
});




//cursor滑鼠的特效
document.addEventListener('mousemove', function(e) {
  const cursorEffect = document.getElementById('cursor-effect');
  const scrollbarWidth = 12; // 根據你的滾動條寬度設置
  const proximityToBottom = 0; // 接近底部的距離閾值

  // 檢查滑鼠是否在滾動條範圍內
  const isOverScrollbar = (e.pageX > window.innerWidth - scrollbarWidth - 50);

  console.log(window.innerHeight - e.pageY)
  if (isOverScrollbar) {
    cursorEffect.style.opacity = 0; // 隱藏特效
  } else {
    cursorEffect.style.left = (e.pageX -25) + 'px'; // 向右偏移 3 像素
    cursorEffect.style.top = (e.pageY -35) + 'px'; // 向下偏移 10 像素
    cursorEffect.style.opacity = 1; // 顯示特效
  }
});

// 當滑鼠移開時隱藏特效
document.addEventListener('mouseleave', function() {
  const cursorEffect = document.getElementById('cursor-effect');
  cursorEffect.style.opacity = 0; // 隱藏特效
});
