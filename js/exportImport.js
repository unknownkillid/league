 fetch('./header.html')
 .then(response => response.text())
 .then(html => document.getElementById('headerContainer').innerHTML = html);