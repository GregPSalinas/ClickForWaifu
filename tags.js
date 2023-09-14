const waifuImage = document.querySelector("#waifus");
const imageLink = document.querySelector("#imageLink");

const ass = document.querySelector("#ass");
const hentai = document.querySelector("#hentai");
const milf = document.querySelector("#milf");
const oral = document.querySelector("#oral");
const ecchi = document.querySelector("#ecchi");
const ero = document.querySelector("#ero");
const paizuri = document.querySelector('#paizuri');

ass.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=ass")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

ecchi.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=ecchi")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

milf.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=milf")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

oral.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=oral")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

ero.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=ero")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

hentai.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=hentai")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

paizuri.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=paizuri")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});
