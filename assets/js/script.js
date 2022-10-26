const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScolling");
});

links.forEach(link => link.addEventListener("click", () =>{
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}));