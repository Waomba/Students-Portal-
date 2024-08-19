// script.js

document.getElementById('toggle-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});

/*accessibility*/
    const fontSizeInput = document.getElementById('font-size');
    const lineHeightInput = document.getElementById('line-height');
    const fontWeightSelect = document.getElementById('font-weight');
    const languageSelect = document.getElementById('language');
    const accessibilityMenu = document.getElementById('accessibility-menu');
    const accessibilityButton = document.getElementById('accessibility-button');
    const themeButton = document.getElementById('theme-button');
    const body = document.body;
    const mainContent = document.getElementById('main-content');

    fontSizeInput.addEventListener('input', () => {
      document.body.style.fontSize = `${fontSizeInput.value}%`;
    });

    lineHeightInput.addEventListener('input', () => {
      document.body.style.lineHeight = lineHeightInput.value;
    });

    fontWeightSelect.addEventListener('change', () => {
      document.body.style.fontWeight = fontWeightSelect.value;
    });

    languageSelect.addEventListener('change', () => {
      const selectedLanguage = languageSelect.value;
      if (selectedLanguage === 'en') {
        mainContent.innerHTML = `
          <h1>Welcome to the Accessible Website</h1>
          <p>This is a sample website with an accessibility menu that allows users to customize the content to their preferences.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed feugiat, magna et interdum commodo, nunc neque varius nunc, quis convallis nisi quam sit amet tortor. Nullam eget ex et enim molestie porttitor. Sed eget risus nec lorem tincidunt efficitur.</p>
        `;
      } else if (selectedLanguage === 'zh') {
        mainContent.innerHTML = `
          <h1>欢迎访问无障碍网站</h1>
          <p>这是一个拥有无障碍菜单的示例网站,允许用户自定义页面内容。</p>
          <p>无愧于己,行未来之事。睿智如山,渊博如海。吾辈当奋发图强,砥砺前行。</p>
        `;
      } else if (selectedLanguage === 'ny') {
        mainContent.innerHTML = `
          <h1>Takulani ku Webusayiti yofikira</h1>
          <p>Ichi ndi webusayiti yachitsanzo yokhala ndi menu yofikira imene imayitana ogwiritsa ntchito kuti akonze zinthu monga momwe akufuna.</p>
          <p>Kuzindikira kwathu sikungadze. Kutsogolera kwathu kumasiyana. Koma ife tikugwa patsogolo, tikuchita zimene zikuyenera..</p>
        `;
      }
    });

    accessibilityButton.addEventListener('click', () => {
      accessibilityMenu.style.display = accessibilityMenu.style.display === 'none' ? 'block' : 'none';
    });

    themeButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      themeButton.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });
