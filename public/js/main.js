const header = document.querySelector("header"); 
const nav    = document.querySelector("nav");
const navAbr = document.querySelector("nav>a.navbar-brand"); 
const navDul = document.querySelector("nav>div.collapse>ul"); 
const divShop=document.querySelector("#shop");


//carousel 
const carouselOp = document.querySelectorAll(".carouseloper"); 
const divsliderr = document.querySelector('#slidesCarousel'); 
const childWidth = divsliderr.firstElementChild.clientWidth;  
let timer; // apres ;)  


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
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    header.style.paddingTop=nav.offsetHeight+"px";
    navAbr.style.width="25%";
    navAbr.style.backgroundColor="yellow";
    document.querySelector("nav").classList.add("sticky"); 
    divShop.style.marginTop="6rem!important"; 

    navDul.style.marginLeft="0";
    navDul.style.marginRight="0";
  } else {
    navDul.style.marginLeft="auto";
    navDul.style.marginRight="auto";

    
    // navDul.style.width="50%";
    header.style.paddingTop="5px";
    navAbr.style.backgroundColor="transparent";
    navAbr.style.width="100%";
    nav.classList.remove("sticky"); 

  }
}