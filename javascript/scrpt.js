const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".menu");
hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active");
navmenu.classList.toggle("active");
}
)
document.querySelectorAll(".item").forEach(n=>
    n.addEventListener("click",()=>
    {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    }
    )
    )