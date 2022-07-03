const btnClosed = document.querySelector(".CloseMenu")
const btnOpen = document.querySelector(".MenuMobile")
const links = document.querySelectorAll("#navBar ul li a")
const nav = document.querySelector("#navBar")

const openMenu = ()=>{
     btnClosed.classList.toggle('show');
    nav.classList.toggle('act'); 
    console.log('here')
}
const closeMenu = ()=>{
     btnClosed.classList.remove('show');
    nav.classList.remove('act'); 
}
btnOpen.addEventListener('click', openMenu)

btnClosed.addEventListener("click",closeMenu) 

for(let link of links){
    link.addEventListener('click', closeMenu)
}


const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  for(let section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  }

  for(let link of links){
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  }
});
