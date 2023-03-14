const img = [
    "01.webp","02.webp","03.webp","04.webp","05.webp"
];
const slide = document.querySelector(".gs-slide");
const carousel = document.querySelector(".gs-carousel");
let currentImg = 0, slides = '';



for(let i=0; i<img.length; i++){
    slides += `
    <div class="gs-carousel-item">
        <img src="./img/${img[i]}" alt="" class=" w-100 h-100 object-fit-cover gs-img-effect">
    </div>
    `
}

carousel.innerHTML += slides;
document.querySelectorAll('.gs-img-effect')[currentImg].classList.add('active');


const btnN = document.querySelector(".next")
const btnP = document.querySelector(".previous")
let show =  `<img src="./img/${img[currentImg]}" alt="" class=" w-100 h-100 object-fit-cover">`
slide.innerHTML = `${show}`

btnN.addEventListener('click', goNext);
btnP.addEventListener('click', goPrev)




function goNext(){
    document.querySelectorAll('.gs-img-effect')[currentImg].classList.remove('active');
    if(currentImg === img.length - 1){
        currentImg = 0;
    }
    else{
        currentImg++;  
    }
    document.querySelectorAll('.gs-img-effect')[currentImg].classList.add('active');
    let show =  `<img src="./img/${img[currentImg]}" alt="" class=" w-100 h-100 object-fit-cover">`
    slide.innerHTML = `${show}`
    
}

function goPrev(){
    document.querySelectorAll('.gs-img-effect')[currentImg].classList.remove('active');
    if(currentImg === 0){
        currentImg = img.length - 1;
    }
    else{
        currentImg--;  
    }
    document.querySelectorAll('.gs-img-effect')[currentImg].classList.add('active');
    let show =  `<img src="./img/${img[currentImg]}" alt="" class=" w-100 h-100 object-fit-cover">`
    slide.innerHTML = `${show}`
}


