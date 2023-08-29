// Show random wallpaper from web
function fetchWallpaper() {
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "url(https://picsum.photos/1920/1080.webp)";
}

// Set a random wallpaper from background directory
(function wallpaper() {
  let number = Math.floor(Math.random() * 6);
  document.body.style.backgroundImage = `url('images/background/image${number}.jxl')`;
})();

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
