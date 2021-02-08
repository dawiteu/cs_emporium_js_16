const header = document.querySelector("header"); 
const nav    = document.querySelector("nav");
const navAbr = document.querySelector("nav>a.navbar-brand"); 


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 135 || document.documentElement.scrollTop > 135) {
    //document.getElementById("navbar").style.padding = "30px 10px";
    //document.getElementById("logo").style.fontSize = "25px";
    //alert('80 px ok');
    document.querySelector("header").style.paddingTop=document.querySelector("nav").offsetHeight+"px";
    // document.querySelector("nav").style.backgroundColor="red";
    document.querySelector("nav>a.navbar-brand").style.width="25%";
    document.querySelector("nav").classList.add("sticky"); 

  } else {
    // document.querySelector("nav").style.backgroundColor="transparent";
    
    document.querySelector("nav>a.navbar-brand").style.width="100%";
    document.querySelector("nav").classList.remove("sticky"); 


   // document.getElementById("navbar").style.padding = "80px 10px";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}