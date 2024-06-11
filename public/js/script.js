const linkIcon = document.querySelector(`link[rel="icon"]`);
const avt = "https://minhdevs.github.io/introduce/dev.png";
setTimeout(() => {
    linkIcon.href = avt;
    linkIcon.src = avt;
}, 3000);
