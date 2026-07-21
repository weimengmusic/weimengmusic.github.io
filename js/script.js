
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

// cursor 滑鼠 / 手機觸控特效
document.addEventListener('DOMContentLoaded', function () {

  const cursorEffect = document.getElementById('cursor-effect');

  if (!cursorEffect) return;


  let touchTimer;
  let isMoving = false;


  // =====================
  // 電腦滑鼠
  // =====================
  document.addEventListener('mousemove', function (e) {

    cursorEffect.style.left = (e.clientX - 25) + 'px';
    cursorEffect.style.top = (e.clientY - 35) + 'px';
    cursorEffect.style.opacity = 1;

  });


  // =====================
  // 手機觸控開始
  // =====================
  document.addEventListener('touchstart', function (e) {

    const touch = e.touches[0];

    isMoving = false;

    clearTimeout(touchTimer);

    cursorEffect.style.left = (touch.clientX - 25) + 'px';
    cursorEffect.style.top = (touch.clientY - 35) + 'px';
    cursorEffect.style.opacity = 1;


    // 單點後 0.82 秒消失
    touchTimer = setTimeout(function () {

      if (!isMoving) {
        cursorEffect.style.opacity = 0;
      }

    }, 820);

  });


  // =====================
  // 手機滑動跟隨
  // =====================
  document.addEventListener('touchmove', function (e) {

    const touch = e.touches[0];

    isMoving = true;

    clearTimeout(touchTimer);

    cursorEffect.style.left = (touch.clientX - 25) + 'px';
    cursorEffect.style.top = (touch.clientY - 35) + 'px';
    cursorEffect.style.opacity = 1;

  });


  // =====================
  // 手指離開
  // =====================
  document.addEventListener('touchend', function () {

    clearTimeout(touchTimer);

    // 如果是滑動，放開立即消失
    if (isMoving) {

      cursorEffect.style.opacity = 0;

    } 
    // 如果只是點擊，維持倒數消失
    else {

      touchTimer = setTimeout(function () {
        cursorEffect.style.opacity = 0;
      }, 820);

    }

  });


  // =====================
  // 滑鼠離開頁面
  // =====================
  document.addEventListener('mouseleave', function () {

    cursorEffect.style.opacity = 0;

  });


});
