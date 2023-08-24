// TODO Fix: Not working. Gettings CORS error
const imageUrl = "";
async function fetchWallpaper() {
  const getRandomImage = await fetch("https://wallhaven.cc/api/v1/search", {
    method: "GET",
  });
  const response = await getRandomImage.json();
  imageUrl = response.data[0].thumbs.large;
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "url(imageUrl)";
}

// Seach function
function doSearch() {
  const searchTerm = document.getElementById("searchfield").value;
  const searchParam = `https://www.duckduckgo.com/?q=${searchTerm}`;
  // const searchParam = `https://www.google.com/search?q=${searchTerm}`;
  window.open(searchParam);
}
