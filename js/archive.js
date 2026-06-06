document.addEventListener('DOMContentLoaded', function() {
  const yearTitles = document.querySelectorAll('.year-title');

  yearTitles.forEach(function(title) {
      const year = title.innerText;

      const postList = document.querySelector(`#posts-${year}`);

      // 預設展開
      postList.style.display = "flex";

      title.addEventListener('click', function() {
          togglePosts(year);
      });
  });
});

function togglePosts(year) {
  const postList = document.querySelector(`#posts-${year}`);

  if (postList.style.display === "none") {
      postList.style.display = "flex";
  } else {
      postList.style.display = "none";
  }
}