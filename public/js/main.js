const header = document.querySelector("header"); 
const nav    = document.querySelector("nav");
const navAbr = document.querySelector("nav>a.navbar-brand"); 
const navDul = document.querySelector("nav>div.collapse>ul"); 
const divShop=document.querySelector("#shop");
let inDarkMode = document.querySelector("input[name=inptdarkmode]"); 

//carousel 
const carouselOp = document.querySelectorAll(".carouseloper"); 
const divsliderr = document.querySelector('#slidesCarousel'); 
const childWidth = divsliderr.firstElementChild.clientWidth;  
let timer; // apres ;)  


console.log(inDarkMode);

inDarkMode.addEventListener("click", () => {
    let body = document.body; 
    let navE = document.querySelectorAll("a.nav-link"); 
    let cTit = document.querySelectorAll(".card-title"); 
    let logo = document.querySelector("nav>a.navbar-brand>img"); 

    if(inDarkMode.checked){
        body.style.backgroundColor="#000";
        nav.style.backgroundColor="#000";
        navE.forEach((e) => { e.style.color="white" });
        cTit.forEach((e) => { e.style.color="#ccc" });
        logo.style.filter="invert(100%)";
    }else{
       body.style.backgroundColor="white"; 
       nav.style.backgroundColor="white";
       logo.style.filter="invert(0%)";
       navE.forEach((e) => { e.style.color="rgba(0,0,0,.5)" });
       cTit.forEach((e) => { e.style.color="rgba(0,0,0,.5)" });

    }
}); 



carouselOp.forEach((e) =>{ 
    e.addEventListener("click", () =>{ 
        //alert(e.getAttribute('id')); 
        //console.log(childWidth); 

        let currentPos = divsliderr.scrollLeft; 
        console.log(currentPos); 
        let newPos; 

        switch(e.getAttribute('id')){
            case "#-2":
                console.log('-2');
                currentPos = divsliderr.scrollLeft; 

                newPos = 0; //currentPos+divsliderr.clientWidth-2; //5 le margin

                timer = setInterval(() => {

                    if(currentPos > newPos){
                        divsliderr.scrollLeft+=1; 
                        currentPos = divsliderr.scrollLeft; 
                        console.log(currentPos);
                    }else if(currentPos >= newPos){
                        console.log('egal'); 
                        clearInterval(timer); 
                    }
                    
                    console.log('+ 2 ')
                    if(currentPos >= newPos){
                        console.log('stop +2');
                        clearInterval(timer); 
                    }
                }, 3);
            break;

            case "#-1":
                console.log('-1');
                
                currentPos = divsliderr.scrollLeft; 
                console.log(`Child width : ${childWidth} `); 
                newPos = childWidth-2; //5 le margin
                console.log(`Currr: ${currentPos} / new: ${newPos} `); 

                //timer = setInterval(() => {
                    if(currentPos > newPos){
                        divsliderr.scrollLeft-=1; 
                        currentPos = divsliderr.scrollLeft;
                    }else if(currentPos <= newPos){
                        console.log('fin!');
                        clearInterval(timer);
                    }
                //}, 3);
            break;

            case "#+1":
                console.log('+1'); 

                currentPos = divsliderr.scrollLeft; 

                newPos = currentPos+childWidth-2; //5 le margin

                console.log(`Child width : ${childWidth} `); 
                console.log(`Currr: ${currentPos} / new: ${newPos} `); 

                timer = setInterval(() => {

                    if(currentPos < newPos){
                        divsliderr.scrollLeft+=1; 
                        currentPos = divsliderr.scrollLeft; 
                        console.log(currentPos);
                    }else if(currentPos >= newPos){
                        clearInterval(timer); 
                    }
                    if(currentPos >= newPos){
                        clearInterval(timer); 
                    }
                }, 3);
            break;

            case "#+2": // on suppose qu'il veux toute une liste de nouveau elements (donc on affiche tout nouveau); 
                console.log('+2');

                currentPos = divsliderr.scrollLeft; 

                newPos = currentPos+divsliderr.clientWidth-2; //5 le margin

                timer = setInterval(() => {

                    if(currentPos < newPos){
                        divsliderr.scrollLeft+=1; 
                        currentPos = divsliderr.scrollLeft; 
                        console.log(currentPos);
                    }else if(currentPos >= newPos){
                        console.log('egal'); 
                        clearInterval(timer); 
                    }
                    
                    console.log('+ 2 ')
                    if(currentPos >= newPos){
                        console.log('stop +2');
                        clearInterval(timer); 
                    }
                }, 3);
            break; 

            default:
                alert('error..? ');
            break;
        }
    })
})

//end carousel


















window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {

    header.style.paddingTop=nav.offsetHeight+"px";
    nav.classList.add("sticky");

    if(inDarkMode.checked){ 
        nav.style.backgroundColor="#000";
    }else{
        nav.style.backgroundColor="white";
    }

    if(document.body.clientWidth >= 992){
        
        navAbr.style.width="25%";
        // navAbr.style.alignSelf="flex-end";
        
        divShop.style.marginTop="6rem!important"; 

        navDul.style.marginLeft="0";
        navDul.style.marginRight="0";
        navDul.style.width="67%";
    }

  } else {
    header.style.paddingTop="5px";
    nav.classList.remove("sticky"); 

    if(document.body.clientWidth >= 992){
        navDul.style.width="50%";
        navDul.style.marginLeft="auto";
        navDul.style.marginRight="auto";

        
        // navDul.style.width="50%";
        
        navAbr.style.backgroundColor="transparent";
        navAbr.style.width="100%";
        
      }


  }
}