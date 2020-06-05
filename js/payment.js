// payment Buttons
const platinum = document.getElementById("platinum");
const diamond = document.getElementById("diamond");
const download = document.getElementById("download");

// platinum---

platinum.addEventListener("click", () => {
  window.open("https://rzp.io/l/pjkuMXd", "_blank");
});

// diamond---

diamond.addEventListener("click", (e) => {
  e.preventDefault();
  const price = document.forms["diamond"]["diamond_plan"].value;
  if (price === "") {
    alert("Please select your subscription in diamond plan");
  } else if (price === "999") {
    window.open("https://rzp.io/l/gbwAdIq", "_blank");
  } else if (price === "2999") {
    window.open("https://rzp.io/l/p95rCqE", "_blank");
  }
});

// download---

download.addEventListener("click", () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.durity&hl=en_US",
    "_blank"
  );
});
