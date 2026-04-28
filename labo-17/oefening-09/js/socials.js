const socials = [
  { platform: "youtube", link: "https://www.youtube.com" },
  { platform: "instagram", link: "https://www.instagram.com/" },
  { platform: "facebook", link: "https://www.facebook.com/" },
  { platform: "twitter", link: "https://twitter.com/" },
];

const ul = document.querySelector('#socials');

socials.forEach(({ platform, link }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = link;
    a.target = "_blank";
    img.src = `assets/icon${platform}.png`;

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
});
