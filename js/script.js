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
let show = document.querySelector('.active').outerHTML
slide.innerHTML = `${show}`

btnN.addEventListener('click', goNext)



function goNext(){
    document.querySelectorAll('.gs-img-effect')[currentImg].classList.remove('active');
    currentImg++;
    document.querySelectorAll('.gs-img-effect')[currentImg].classList.add('active');
}



