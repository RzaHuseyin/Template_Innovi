
var arryP=document.querySelectorAll(".partners p");
var arryH3=document.querySelectorAll(".partners h3");


function over(element){
    var count=0;
    for(var i=0;i<arryP.length;i++){
    arryP[i].style.height="0px";
    arryH3[i].setAttribute("data-attr","+")
     }
    element.setAttribute("data-attr","--");
     
     var myInterval=setInterval(speed,25)
     function speed(){
        count+=10;
        element.nextElementSibling.style.height=0+count+"px";
        if(count>60){
            clearInterval(myInterval);
        }
    }
}
    // ================ scroll up function ==================================
var btn = document.querySelector(".js-scrollup");

 btn.onclick = function () {


    var intervalId = setInterval(function () { 
        var s = document.body;
        if (s.scrollTop > 0) {
            // if (s.scrollTop < 123) {
            //     s.scrollTop -= 1;

            // } 
            // else {
                s.scrollTop -= 20;
            // }
        } 
        else {
            clearInterval(intervalId);
        }
    }   , 0); 

};

// =============main menu with scroll top==================
 var selectH1=document.querySelectorAll(".planContainer h1");
 var k=0;
 var countone=10;
 var counttwo=4;
 var countthree=0;
 var countfour=0;
var mainMenu=document.querySelector(".mainMenu")
window.onscroll = function () {
    var s = document.body.scrollTop;
   
    if (s > 80) {
        mainMenu.style.display="block";
        if (s > 200) {
            btn.style.display="block";
            //    ========start container count============
            if(s>=3500){  
            var intervalIdlist = setInterval(function () { 
                if (countone<570) {
                    countone+=20;
                    selectH1[0].innerHTML=""+countone+"";
                    if(counttwo<364){
                        counttwo+=20;
                        selectH1[1].innerHTML=""+counttwo+"";
                    if(countthree<16){
                        countthree+=1;
                        selectH1[2].innerHTML=""+countthree+"";
                        if(countfour<12){
                        countfour+=1;
                        selectH1[3].innerHTML=""+countfour+"";
                    }}}}
                else {
                        clearInterval(intervalIdlist);
                    }
            }   , 100);  }

        } 
        else {
            btn.style.display="none";
        }
        mainMenu.style.display="block";
    } 
    else {
        mainMenu.style.display="none";
    }
}

//====================== end scroll up function =============================

//======================== start list=============================
var mylist= document.querySelector("#list");
var myArray=[
/*1 */   ["Static Elements","Accordinc","Audio","Animated Counter","Blurb","Buttons","Call To Action","Circles Counter","Countdown Timer","Contact Form","Maps","Number Counter","Person","Pricing Table","Slider","Social Sharing","Tabs","Testimonials"],
/*2 */   ["Dinamic Elements","Testimonials Module"],
/*3 */   ["Post Formats","Standart","Nostandart","Gallery","Image", "Link","Quote","Video","Audio"],
/*4 */   ["Blog Layouts","Classic","Grid","Masonry","Justify"],
/*5 */   ["Sidebar","Left Sidebar","Right Sidebar","No Sidebar"],
/*6 */   ["Headers","Header Style 1","Header Style 2","Header Style 3","Header Style 4","Header Style 5","Header Style 6","Header Style 7"],
/*7 */   ["Footers","Footer Style 1","Footer Style 2","Footer Style 3"],
/*8 */   ["Typography",""],
/*9 */   ["Error 404 Page",""],
/*10*/   [ "Documentation",""]
        
    ]
 var z=0;    
var ul=document.createElement("ul");
ul.className="ulOpen";
document.querySelector("#ulMain").appendChild(ul);
var ulOpen=document.querySelector(".ulOpen");
for (i=0;i<myArray.length;i++){
 var li=document.createElement("li");
 var a=document.createElement("a");
 a.setAttribute("href","#");
 li.style.height="30px";
 a.innerHTML=myArray[i][0];
 li.appendChild(a);
 ulOpen.appendChild(li);
 li.addEventListener('mouseover',function(){
     this.nextElementSibling.style.display="block";
 });
 li.addEventListener('mouseout',function(){
     this.nextElementSibling.style.display="none";
 });
 
if(myArray[i].length>1){
    var ul=document.createElement("ul");
    ul.className="ulOne";
    ulOpen.appendChild(ul);
    var ulOne=document.querySelectorAll(".ulOne");
           
    for(j=1;j<myArray[i].length;j++){
     var li=document.createElement("li");
     var a=document.createElement("a");
     a.setAttribute("href","#");
     li.style.height="30px";
     a.innerHTML=myArray[i][j];
     li.appendChild(a);
     ulOne[z].appendChild(li);
            ulOne[z].addEventListener('mouseover',function(){
            this.style.display="block";
            });
            ulOne[z].addEventListener('mouseout',function(){
            this.style.display="none";
            });
    }
     z+=1;    
}
 
}

// function listBlock(){
//     ulOne[i].style.display="block";
// }

// =====for ulOpen display block and none ----- up and down


function  listUp(){
    ulOpen.style.display="block";
    i=150;
    var intervalId = setInterval(function () { 
        if (ulOpen.style.top!="110px") {
                i-=40;
               ulOpen.style.top=i+"px";
        } 
        else {
            clearInterval(intervalId);
        }
    }   , 0); 
}

function listDown(){
ulOpen.style.display="none";
  i=130;
    var intervalId = setInterval(function () { 
        if (ulOpen.style.top!="150px") {
                i+=40;
               ulOpen.style.top=i+"px";
        } 
        else {
            clearInterval(intervalId);
        }
    }   , 0); 
};
mylist.addEventListener("mouseover",listUp);
mylist.onmouseover= function(){
ulOpen.style.display="block";}
// ulOne.style.display="block";}

ulOpen.addEventListener("mouseover",listUp);
ulOpen.onmouseover= function(){
ulOpen.style.display="block";}
// ulOne.style.display="block";}

ulOpen.addEventListener("mouseout",listDown);
ulOpen.onmouseout= function(){
ulOpen.style.display="none";}
// ulOne.style.display="none";}

mylist.addEventListener("mouseout",listDown);
mylist.onmouseout= function(){
ulOpen.style.display="none";}
// ulOne.style.display="none";}

//======================== end list=============================
