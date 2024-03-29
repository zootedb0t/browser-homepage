// Show random wallpaper from web
var loadWallpaper = document.getElementById("wallpaper");
loadWallpaper.addEventListener("click", () => {
  document.body.style.backgroundImage = `url('images/imageofday.png')`;
});

// Set a random wallpaper from background directory
document.addEventListener("DOMContentLoaded", () => {
  let number = Math.floor(Math.random() * 9);
  document.body.style.backgroundImage = `url('images/background/image${number}.jxl')`;
});

// Seach function
function doSearch() {
  const searchField = document.getElementById("searchfield");
  const searchTerm = searchField.value.trim();
  if (searchTerm) {
    // window.open(`https://www.duckduckgo.com/?q=${searchTerm}`);
    window.open(`https://searx.be/search?q=${searchTerm}`);
  }
  searchField.value = "";
}
