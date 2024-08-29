// Set a random wallpaper from background directory
document.addEventListener("DOMContentLoaded", () => {
  let number = Math.floor(Math.random() * 10);
  document.body.style.backgroundImage = `url('docs/images/background/image${number}.jxl')`;
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
