// 作者介紹相關
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  // const mainContent = document.getElementById('main-content');
  const bodyElement = document.querySelector('body');

  // 檢查是否在桌面模式
    function isDesktop() {
        return window.innerWidth >= 768;
    }

    function updateLayout() {
        if (isDesktop()) {
            // 在桌面模式下，推動主內容區域
            bodyElement.style.marginLeft = sidebar.style.left === '0px' ? '250px' : '0';
        } else {
            // 在手機模式下，確保主內容區域不變
            bodyElement.style.marginLeft = '0'; // 確保主內容區域不被推動
        }
    }


    
    // 檢查是否存在特定元素來決定是否顯示側邊欄
    function shouldShowSidebar() {
        return document.getElementById('home') !== null;
    }

    if (isDesktop() && shouldShowSidebar()) {
        // 在桌面模式下，推動主內容區域
        sidebar.style.left = '0'; // 顯示側邊欄
        bodyElement.style.marginLeft = sidebar.style.left === '0px' ? '250px' : '0';
    } 




    openBtn.addEventListener('click', function() {
        sidebar.style.left = '0'; // 顯示側邊欄
        if (isDesktop()) {
            bodyElement.style.marginLeft = '250px'; // 推動主內容區域
        }
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.left = '-250px'; // 隱藏側邊欄
        updateLayout(); // 更新主內容區域的 margin-left
    });

    // 當視窗大小改變時更新布局
    window.addEventListener('resize', updateLayout);
});






// 標籤類別相關
document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有標籤和分類的連結
    const tagLinks = document.querySelectorAll('.side_tag-item');
    const categoryLinks = document.querySelectorAll('.side_category-item');
  
    // 點擊標籤的處理
    tagLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const tagName = this.getAttribute('data-tag');
        fetchContent('tags', tagName);
        document.getElementById('content-area').innerHTML = 'Loading...<3';

        // 顯示彈跳視窗
        const modal = document.querySelector('#modal');
        modal.style.display = 'block';
      });
    });
  
    // 點擊分類的處理
    categoryLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const categoryName = this.getAttribute('data-category');
        fetchContent('categories', categoryName);
        document.getElementById('content-area').innerHTML = 'Loading...<3';

        // 顯示彈跳視窗
        const modal = document.querySelector('#modal');
        modal.style.display = 'block';
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
  

// 當點擊 <h3> 標題時，控制下方容器的顯示和隱藏。
const toggleSections = document.querySelectorAll('.h3-toggle-section');
toggleSections.forEach(section => {
    section.addEventListener('click', function() {
        const container = this.nextElementSibling;
        if (container.style.maxHeight) {
            container.style.maxHeight = null; // 收起
        } else {
            container.style.display = 'block'; // 顯示
            // const height = container.scrollHeight + 'px'; // 獲取實際高度
            // container.style.maxHeight = height; // 設置為實際高度

            //如果希望不限制高度，可以設置為 max-height: none;
            container.style.maxHeight = 'none';
        }
    });
});