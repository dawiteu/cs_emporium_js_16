const header = document.querySelector("header"); 
const nav    = document.querySelector("nav");
const navAbr = document.querySelector("nav>a.navbar-brand"); 
const divShop=document.querySelector("div#shop");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    header.style.paddingTop=nav.offsetHeight+"px";
    navAbr.style.width="25%";
    navAbr.style.backgroundColor="yellow";
    document.querySelector("nav").classList.add("sticky"); 
    divShop.style.marginTop="6rem!important"; 
  } else {
    header.style.paddingTop="5px";
    navAbr.style.backgroundColor="transparent";
    document.querySelector("nav>a.navbar-brand").style.width="100%";
    document.querySelector("nav").classList.remove("sticky"); 

  }
}