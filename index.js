const waifuImage = document.querySelector("#waifus");
const imageLink = document.querySelector("#imageLink");
const waifuButton = document.querySelector("#waifuButton");
const waifuButtonNsfw = document.querySelector("#waifuButtonNsfw");

const makeImages = (waifus) => {
  for (let result of waifus) {
    const img = document.createElement("IMG");
    img.src.url = result.show.image.medium;
    document.body.append(img);
  }
};

// Safe For Work
waifuButton.addEventListener("click", () => {
  fetch("https://api.waifu.im/search")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

// Not Safe For Work
waifuButtonNsfw.addEventListener("click", () => {
  fetch("https://api.waifu.im/search/?is_nsfw=true")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});
