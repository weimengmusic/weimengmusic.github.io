
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




// //cursor滑鼠的特效
// document.addEventListener('mousemove', function(e) {
//   const cursorEffect = document.getElementById('cursor-effect');
//   const scrollbarWidth = 12; // 根據你的滾動條寬度設置
//   const proximityToBottom = 0; // 接近底部的距離閾值

//   // 檢查滑鼠是否在滾動條範圍內
//   const isOverScrollbar = (e.pageX > window.innerWidth - scrollbarWidth - 50);

//   if (isOverScrollbar) {
//     cursorEffect.style.opacity = 0; // 隱藏特效
//   } else {
//     cursorEffect.style.left = (e.clientX - 25) + 'px';
//     cursorEffect.style.top = (e.clientY - 35) + 'px';
//     cursorEffect.style.opacity = 1; // 顯示特效
//   }
// });

// // 當滑鼠移開時隱藏特效
// document.addEventListener('mouseleave', function() {
//   const cursorEffect = document.getElementById('cursor-effect');
//   cursorEffect.style.opacity = 0; // 隱藏特效
// });

// // 手機觸控後，1秒隱藏光圈
// let touchTimer;

// document.addEventListener('touchstart', function () {

//   const cursorEffect = document.getElementById('cursor-effect');
//   if (!cursorEffect) return;

//   // 顯示光圈
//   cursorEffect.style.opacity = 1;

//   // 清除上一個計時
//   clearTimeout(touchTimer);

//   // 1秒後隱藏
//   touchTimer = setTimeout(function () {
//     cursorEffect.style.opacity = 0;
//   }, 820);

// });

// if (!('ontouchstart' in window)) {

//   document.addEventListener('mousemove', function(e) {

//     const cursorEffect = document.getElementById('cursor-effect');
//     if (!cursorEffect) return;

//     cursorEffect.style.left = (e.clientX - 25) + 'px';
//     cursorEffect.style.top = (e.clientY - 35) + 'px';
//     cursorEffect.style.opacity = 1;

//   });

// }

// cursor 光圈效果（桌機 / 手機分開）

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