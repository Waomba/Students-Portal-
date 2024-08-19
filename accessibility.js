// accessibility.js
document.addEventListener('DOMContentLoaded', function() {
  var link = document.createElement('a');
  link.href = 'accessibility.html';
  link.textContent = 'Accessibility Statement';
  document.body.appendChild(link);
});
```
Include this script in all HTML files:
```
<script src="accessibility.js"></script>
