const toggleBtn = document.getElementById("toggleBtn");
const sideBar = document.getElementById("sideBar");
const cancelBtn = document.getElementById("cancelBtn");
const home = document.getElementById("home");
const about = document.getElementById("about-page");
const portfolio = document.getElementById("portfolio-page");
const contact = document.getElementById("contact-page");
const username = document.getElementById("username");
const email = document.getElementById("email");

toggleBtn.addEventListener("click", ()=> {
    sideBar.style.display = "flex";
});

cancelBtn.addEventListener("click", ()=> {
    sideBar.style.display = "none";
});

home.addEventListener("click", ()=> {
    sideBar.style.display = "none";
});

about.addEventListener("click", ()=> {
    sideBar.style.display = "none";
});

portfolio.addEventListener("click", ()=> {
    sideBar.style.display = "none";
});

contact.addEventListener("click", ()=> {
    sideBar.style.display = "none";
});