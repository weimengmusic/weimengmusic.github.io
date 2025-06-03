
const wrapper = document.getElementById('mengCarousel');
const scrollContainer = wrapper.querySelector('.meng-carousel');
const slideWidth = 240;
let isDown = false;
let startX;
let scrollLeft;

wrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  wrapper.classList.add('dragging');
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener('mouseleave', () => {
  isDown = false;
  wrapper.classList.remove('dragging');
});

wrapper.addEventListener('mouseup', () => {
  isDown = false;
  wrapper.classList.remove('dragging');
});

wrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 1.5; // 拖曳速度
  wrapper.scrollLeft = scrollLeft - walk;
});

// ✅ 自動輪播（選擇性保留）
let autoScroll = true;
function autoSlide() {
  if (!autoScroll) return;
  scrollContainer.scrollBy({
    left: slideWidth,
    behavior: 'smooth'
  });
  if (
    scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
    scrollContainer.scrollWidth - 1
  ) {
    setTimeout(() => {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }, 500);
  }
}

setInterval(autoSlide, 5000);



document.querySelectorAll('.carousel-img').forEach(img => {
  img.setAttribute('draggable', 'false');
});

// 全區禁用右鍵（可只針對圖片也行）
document.addEventListener('contextmenu', function (e) {
  if (e.target.closest('.carousel-img')) {
    e.preventDefault();
  }
});

