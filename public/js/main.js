const header = document.querySelector("header"); 
const nav    = document.querySelector("nav");
const navAbr = document.querySelector("nav>a.navbar-brand"); 
const navDul = document.querySelector("nav>div.collapse>ul"); 
const divShop=document.querySelector("#shop");
let inDarkMode = document.querySelector("input[name=inptdarkmode]"); 

// modal 
const btnMod = document.querySelector("button[href='#modal']"); 
const modall = document.querySelector("div#modal"); 
const modclos= document.querySelector("div#modal>p.close");

let modalOpen = false; // 

//


// document.body.style.visibility="hidden";
// document.body.style.opacity="0";
// document.body.style.transition="opacity .5s, visibility .5s";




//carousel 
const carouselOp = document.querySelectorAll(".carouseloper"); 
const divsliderr = document.querySelector('#slidesCarousel'); 
const childWidth = divsliderr.firstElementChild.offsetWidth;  
let timer; // apres ;)  



// dark mode ; 
inDarkMode.addEventListener("click", () => {
    let body = document.body; 
    let navE = document.querySelectorAll("a.nav-link"); 
    let cTit = document.querySelectorAll(".card-title"); 
    let logo = document.querySelector("nav>a.navbar-brand>img"); 
    let testim = document.querySelector("#testims");
    let h3car = document.querySelector("section#mycarouse>h3");
    
    if(inDarkMode.checked){
        body.style.backgroundColor="#000";
        nav.style.backgroundColor="#000";
        navE.forEach((e) => { e.style.color="white" });
        cTit.forEach((e) => { e.style.color="#ccc" });
        logo.style.filter="invert(100%)";
        testim.style.color="white"; 
        h3car.style.color="white"; 
        nav.classList.remove("navbar-light");
        nav.classList.add("navbar-dark");
    }else{
        nav.classList.add("navbar-light");
        nav.classList.remove("navbar-dark");
        h3car.style.color="rgba(0,0,0,.5)";
        body.style.backgroundColor="white"; 
        nav.style.backgroundColor="white";
        logo.style.filter="invert(0%)";
        testim.style.color="#212529"; 
        navE.forEach((e) => { e.style.color="rgba(0,0,0,.5)" });
        cTit.forEach((e) => { e.style.color="white" });

    }
}); 



//carousel 

carouselOp.forEach((e) =>{ 
    e.addEventListener("click", () =>{ 
        //alert(e.getAttribute('id')); 
        //console.log(childWidth); 

        let currentPos = divsliderr.scrollLeft; 
        console.log(currentPos); 
        let newPos; 

        switch(e.getAttribute('id')){
            case "#-2":
                clearInterval(timer);
                console.log('-2');
                currentPos = divsliderr.scrollLeft; 

                newPos = 0; //currentPos+divsliderr.clientWidth-2; //5 le margin

                console.log(`cur: ${currentPos} `);


                timer = setInterval(() => {

                    if(currentPos > newPos){
                        divsliderr.scrollLeft-=1; 
                        currentPos = divsliderr.scrollLeft; 
                        console.log(currentPos);
                    }
                    if(currentPos == 0){
                        clearInterval(timer); 
                    }
                }, 3);
            break;

            case "#-1":
                console.log('-1');
                clearInterval(timer);

                currentPos = divsliderr.scrollLeft; 
                console.log(`Child width : ${childWidth} `); 
                newPos = (currentPos-childWidth)-2; //5 le margin
                console.log(`Currr: ${currentPos} / new: ${newPos} `); 

                timer = setInterval(() => {
                    if(currentPos > newPos){
                        divsliderr.scrollLeft-=1; 
                        currentPos = divsliderr.scrollLeft;
                    }else if(currentPos <= newPos){
                        console.log('fin!');
                        clearInterval(timer);
                    }
                }, 3);
            break;

            case "#+1": 
                clearInterval(timer);
                
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
                clearInterval(timer);
                
                currentPos = divsliderr.scrollLeft; 

                if(document.body.offsetWidth > 992 ){
                   newPos = (divsliderr.offsetWidth)-45; 
                }else{
                    newPos = divsliderr.offsetWidth;
                }
                

                timer = setInterval(() => {

                    if(currentPos < newPos){
                        divsliderr.scrollLeft+=1; 
                        currentPos = divsliderr.scrollLeft;
                    }else if(currentPos > newPos){
                        console.log('egal'); 
                        clearInterval(timer); 
                    }
                    
                    if(currentPos == newPos){
                        clearInterval(timer);
                    }
                    console.log(`${currentPos} / ${newPos} `); 

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


    //console.log(document.documentElement.scrollTop);


  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

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

  const secTestim = document.querySelector("#testims");
  const childs = secTestim.children; 

  Array.from(childs).forEach((e) => {
    e.style.visibility="hidden"; 
    e.style.opacity="0";
    e.style.transition="opacity .3s, visibility .3s";

  });

  if(document.documentElement.scrollTop >= 3000){ 
      Array.from(childs).forEach((e) => {
        e.style.visibility="visible"; 
        e.style.opacity="1";
      });
  }


}

window.onload = () =>{
    let x=setTimeout(() => {
        document.body.style.visibility="visible";
        document.body.style.opacity="1";
        clearTimeout(x);
    }, 650);
}




/* modal */
let close = () => {
    modall.style.visibility="hidden";
    modall.style.opacity="0"; 
    let divH = document.querySelector("div.hide");
    divH ? document.body.removeChild(divH) : null ; 
    modalOpen=false;  
    document.body.style.overflow="initial";    
}


btnMod.addEventListener("click", () => { 
    modalOpen=true; 
    let divHide = document.createElement("div"); 
    divHide.classList.add("hide"); 
    document.body.insertBefore(divHide, document.querySelector("header"));
    modall.style.visibility="visible"; 
    modall.style.opacity="1";
    document.body.style.overflow="hidden"; 
    let bodyHei = document.body.offsetHeight; 
    divHide.style.height = bodyHei; 

    modclos.addEventListener("click", () => {
        close();
    });  

    divHide.addEventListener("click", (e) => {
        if(modalOpen){
            if(e.target == e.currentTarget){
                close();   
            }          
        }
    });
});


/*  tab connection et inscription */

const buttons = document.querySelectorAll(".list"); 
const textess = document.querySelectorAll(".text"); 

let textesToggles = () => { 
    textess.forEach(e => {
      e.style.display="none";
    })
  }
  
 textesToggles(); 

 buttons.forEach((e) =>{
    e.addEventListener("click", () =>{
        let div = e.getAttribute('href').substring(1);
        let findDiv = "#"+div; 
        //console.log(findDiv);
        textesToggles(); 
        document.querySelector(findDiv).style.display="block";
    });
});

textess.forEach((e) => {
    if(e.classList.contains('active')){
        let div = e.getAttribute('id');
        let findDiv = "#"+div; 
        //console.log(findDiv);
        textesToggles(); 
        document.querySelector(findDiv).style.display="block";
    }
});

