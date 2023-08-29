// Show random wallpaper from web
function fetchWallpaper() {
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "url(https://picsum.photos/1920/1080.webp)";
}

// Seach function
function doSearch() {
  const searchField = document.getElementById("searchfield");
  const searchTerm = searchField.value.trim();
  if (searchTerm) {
    // window.open(`https://www.duckduckgo.com/?q=${searchTerm}`);
    window.open(`https://www.librex.me/search.php?q=${searchTerm}`);
  }
  searchField.value = "";
}
