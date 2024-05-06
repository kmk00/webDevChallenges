const themeSwitcher = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function toggleTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

themeSwitcher.addEventListener("change", toggleTheme);

// -----------------------

const uploadedFile = document.querySelector("#file-upload");

uploadedFile.addEventListener("change", (e) => {
  console.log(e.target.files[0]);
  const image = document.querySelector(".uploaded-image");
  const uploadContainer = document.querySelector("#drop-container");

  uploadContainer.classList.add("hidden");
  image.src = URL.createObjectURL(e.target.files[0]);
});
