
document.addEventListener('DOMContentLoaded', function () {
  // 取得切換按鈕、彈跳視窗和關閉按鈕
  const modal = document.querySelector('#modal');
  const closeButton = document.querySelector('#closeButton');
  const tag_toggleButton = document.querySelector('#tag_toggleButton');

  // 顯示彈跳視窗
  tag_toggleButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // 關閉彈跳視窗
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 點擊彈跳視窗外部關閉彈跳視窗
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // 獲取所有標籤和分類的連結
  const tagLinks = document.querySelectorAll('.tag-item');
  const categoryLinks = document.querySelectorAll('.category-item');

  // 點擊標籤的處理
  tagLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const tagName = this.getAttribute('data-tag');
      console.log("Hello, world!");
      fetchContent('tags', tagName);
      document.getElementById('content-area').innerHTML = 'Loading...<3';
      

    });
  });

  // 點擊分類的處理
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const categoryName = this.getAttribute('data-category');
      console.log("Hello, world!");
      fetchContent('categories', categoryName);
      document.getElementById('content-area').innerHTML = 'Loading...<3';
      

    });
  });

  function fetchContent(type, name) {
    fetch(`/${type}/${encodeURIComponent(name)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text(); // 直接獲取 HTML 內容
      })
      .then(html => {
        // 使用 DOMParser 解析 HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // 移除 header 和其他不需要的部分
        // 假設 header 是 <header> 元素
        const header = doc.querySelector('header');
        if (header) {
          header.remove();
        }
        
        // 提取主要內容部分，假設主要內容在 <main> 或其他標籤中
        const mainContent = doc.querySelector('main');
        if (mainContent) {
          document.getElementById('content-area').innerHTML = mainContent.innerHTML;
        } else {
          // 如果沒有找到 <main>，可以選擇顯示整個文檔的內容
          document.getElementById('content-area').innerHTML = doc.body.innerHTML;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('content-area').innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
});
