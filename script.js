
function hidePopupForm(){
    document.querySelector(".overlay").classList.remove('showOverlay');
    document.querySelector(".contact-form").classList.remove('showContactForm');
}
function showPopupForm(){
    document.querySelector(".overlay").classList.add('showOverlay');
    document.querySelector(".contact-form").classList.add('showContactForm');
}

document.querySelector(".contact-btn").addEventListener("click", showPopupForm);
document.querySelector(".overlay").addEventListener("click", hidePopupForm);

let email_input=document.querySelector("#workEmail");
email_input.addEventListener("click",()=>{
    let l1=document.querySelector("#label1");
    l1.classList.add("show-labels");
});

let fname_input=document.querySelector("#firstName");
fname_input.addEventListener("click",()=>{
    let l2=document.querySelector("#label2");
    l2.classList.add("show-labels");
});

let lname_input=document.querySelector("#lastName");
lname_input.addEventListener("click",()=>{
    let l3=document.querySelector("#label3");
    l3.classList.add("show-labels");
});

let scrollContainer=document.querySelector(".gallery");
let nextBtn=document.querySelector("#nextBtn");
let backBtn=document.querySelector("#backBtn");

let dotNumber=2;
nextBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=966;
    let lastActiveDot=document.querySelector('.dots-ul li.active');
    lastActiveDot.classList.remove('active');
    let activeDot=document.querySelector(`.dots-ul li.dot${dotNumber}`);
    activeDot.classList.add('active');
    dotNumber++;
});

let dotNumber2=2;
backBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -=966;
    let lastActiveDot=document.querySelector('.dots-ul li.active');
    lastActiveDot.classList.remove('active');
    let activeDot=document.querySelector(`.dots-ul li.dot${dotNumber2}`);
    activeDot.classList.add('active');
    dotNumber2--;
});


let image1=document.querySelector('.image1');
let image2=document.querySelector('.image2');
let image3=document.querySelector('.image3');
let image4=document.querySelector('.image4');
let image1_overlay = document.querySelector('.image1-overlay');
let image2_overlay = document.querySelector('.image2-overlay');
let image3_overlay = document.querySelector('.image3-overlay');
let image4_overlay = document.querySelector('.image4-overlay');

function imageReplacer(event){
    event.target.style.zIndex=-1;
    image1_overlay.style.zIndex=1;
}  
function backToImage(event){
    event.target.style.zIndex=1;
    image1_overlay.style.zIndex=-1;
}
image1.addEventListener('mouseover', imageReplacer);
image1.addEventListener('mouseout', backToImage);

function imageReplacer2(event){
    event.target.style.zIndex=-1;
    image2_overlay.style.zIndex=1;
}  

function backToImage2(event){
    event.target.style.zIndex=1;
    image2_overlay.style.zIndex=-1;
}
image2.addEventListener('mouseover', imageReplacer2);
image2.addEventListener('mouseout', backToImage2);

function imageReplacer3(event){
    event.target.style.zIndex=-1;
    image3_overlay.style.zIndex=1;
}  

function backToImage3(event){
    event.target.style.zIndex=1;
    image3_overlay.style.zIndex=-1;
}
image3.addEventListener('mouseover', imageReplacer3);
image3.addEventListener('mouseout', backToImage3);

function imageReplacer4(event){
    event.target.style.zIndex=-1;
    image4_overlay.style.zIndex=1;
}  

function backToImage4(event){
    event.target.style.zIndex=1;
    image4_overlay.style.zIndex=-1;
}
image4.addEventListener('mouseover', imageReplacer4);
image4.addEventListener('mouseout', backToImage4);

let projects_text1=document.querySelector('.projects-text1');
let projects_text2=document.querySelector('.projects-text2');
let projects_text3=document.querySelector('.projects-text3');
let projectImage=document.querySelector('.projects-left');


projects_text1.addEventListener('click', ()=>{
    projectImage.innerHTML='<img src="projects1.jpeg" alt=""/>'
});

projects_text2.addEventListener('click', ()=>{
    projectImage.innerHTML='<img src="project1.png" alt=""/>'
});

projects_text3.addEventListener('click', ()=>{
    projectImage.innerHTML='<img src="projects2.jpeg" alt=""/>'
});