document.addEventListener('DOMContentLoaded', function() {
  const yearTitles = document.querySelectorAll('.year-title');
  
  yearTitles.forEach(function(title) {
      const year = title.innerText; // 獲取年份

      // 初始隱藏對應年份的文章列表
      const postList = document.querySelector(`#posts-${year}`);
      postList.style.display = "none"; // 初始隱藏文章列表

      title.addEventListener('click', function() {
          togglePosts(year); // 調用 togglePosts 函數
      });
  });
});

// 切換文章列表的顯示狀態
function togglePosts(year) {
  const postList = document.querySelector(`#posts-${year}`); // 獲取對應年份的文章列表
  // 根據當前顯示狀態切換顯示或隱藏
  if (postList.style.display === "none") {
      postList.style.display = "flex"; // 顯示文章列表，保持 Flexbox 設置
  } else {
      postList.style.display = "none"; // 隱藏文章列表
  }
}