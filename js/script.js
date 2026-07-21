
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


document.addEventListener('DOMContentLoaded', function () {

  const cursorEffect = document.getElementById('cursor-effect');

  if (!cursorEffect) return;


  // 判斷裝置
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;


  // =============================
  // 📱 手機版（觸控）
  // =============================
  if (isTouchDevice) {

    let touchTimer;


    // 點擊出現
    document.addEventListener('touchstart', function (e) {

      const touch = e.touches[0];


      clearTimeout(touchTimer);


      cursorEffect.style.left = (touch.clientX - 25) + 'px';
      cursorEffect.style.top = (touch.clientY - 35) + 'px';
      cursorEffect.style.opacity = '1';


      // 0.82 秒後消失
      touchTimer = setTimeout(function () {

        cursorEffect.style.opacity = '0';

      }, 820);


    }, { passive: true });



    // 滑動時完全不要光圈
    document.addEventListener('touchmove', function () {

      clearTimeout(touchTimer);

      cursorEffect.style.opacity = '0';


    }, { passive: true });



    // 手指離開
    document.addEventListener('touchend', function () {

      clearTimeout(touchTimer);

      cursorEffect.style.opacity = '0';

    });


  }



  // =============================
  // 🖱 桌機版（滑鼠）
  // =============================
  else {


    document.addEventListener('mousemove', function (e) {


      cursorEffect.style.left = (e.clientX - 25) + 'px';
      cursorEffect.style.top = (e.clientY - 35) + 'px';
      cursorEffect.style.opacity = '1';


    });



    // 滑鼠離開瀏覽器
    document.addEventListener('mouseleave', function () {

      cursorEffect.style.opacity = '0';

    });


  }


});