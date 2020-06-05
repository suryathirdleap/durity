const playStore = document.getElementById("playstore");
const appleStore = document.getElementById("applestore");

playStore.addEventListener("click", () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.durity&hl=en_US",
    "_blank"
  );
});

appleStore.addEventListener("click", () => {
  window.open("https://apps.apple.com/in/app/durity/id1507119151", "_blank");
});
