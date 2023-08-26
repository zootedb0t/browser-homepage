// TODO Fix: Not working. Gettings CORS error
// async function fetchWallpaper() {
function fetchWallpaper() {
  // const getRandomImage = await fetch("https://wallhaven.cc/api/v1/search", {
  //   method: "GET",
  // });
  // const response = await getRandomImage.json();
  // const imageUrl = response.data[0].thumbs.large;
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
