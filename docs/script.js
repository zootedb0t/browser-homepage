// TODO Fix: Not working. Gettings CORS error
// async function fetchWallpaper() {
function fetchWallpaper() {
  // const getRandomImage = await fetch("https://wallhaven.cc/api/v1/search", {
  //   method: "GET",
  // });
  // const response = await getRandomImage.json();
  // const imageUrl = response.data[0].thumbs.large;
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = "url(https://th.wallhaven.cc/lg/jx/jxy6vp.jpg)";
}

// Seach function
function doSearch() {
  const searchField = document.getElementById("searchfield");
  const searchTerm = searchField.value.trim();
  if (searchTerm) {
    // const searchParam = `https://www.google.com/search?q=${searchTerm}`;
    window.open(`https://www.duckduckgo.com/?q=${searchTerm}`);
  }
  searchField.value = "";
}
