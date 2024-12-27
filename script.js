const navBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
// console.log(navBtn);


function toggleMenu(){
    headerEl.classList.toggle("nav-open");
}

navBtn.addEventListener("click",toggleMenu);


//implementing smooth scrolling for older safari browsers:

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

allLinks.forEach(link=>{
    link.addEventListener("click",function(e){
        const href = link.getAttribute("href");
        if (href === "#" || href.startsWith("#")) e.preventDefault();

        if(href === "#"){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        };
        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            console.log(sectionEl);
            sectionEl.scrollIntoView({
                behavior:"smooth"
            })
        }

        if(link.classList.contains("main-nav-link")){
          setTimeout(toggleMenu,200)
        }

    })
})