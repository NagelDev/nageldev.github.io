let image1 = document.querySelector('.art1');
let image2 = document.querySelector('.art2');
let image3 = document.querySelector('.art3');
let image4 = document.querySelector('.art4');

let img1f = document.querySelector('.funtion1');
let img2f = document.querySelector('.funtion2');
let img3f = document.querySelector('.funtion3');
let img4f = document.querySelector('.funtion4');
let black = document.querySelector('.black');




//show
image1.addEventListener('click', () =>{
    document.querySelector('.funtion1').style.display="block";
    // document.querySelector('.funtion1').style.transition="1s";
    document.querySelector('.black').style.display="block";
    document.querySelector('html').style.overflow="scroll";
    document.querySelector('html').style.overflowX="hidden";
})
image2.addEventListener('click', () =>{
    document.querySelector('.funtion2').style.display="block";
    // document.querySelector('.funtion1').style.transition="1s";
    document.querySelector('.black').style.display="block";
})
image3.addEventListener('click', () =>{
    document.querySelector('.funtion3').style.display="block";
    // document.querySelector('.funtion1').style.transition="1s";
    document.querySelector('.black').style.display="block";
})
image4.addEventListener('click', () =>{
    document.querySelector('.funtion4').style.display="block";
    // document.querySelector('.funtion1').style.transition="1s";
    document.querySelector('.black').style.display="block";
})
//hide
img1f.addEventListener('click', () =>{
    document.querySelector('.funtion1').style.display="none";
    document.querySelector('.black').style.display="none";
})
img2f.addEventListener('click', () =>{
    document.querySelector('.funtion2').style.display="none";
    document.querySelector('.black').style.display="none";
})
img3f.addEventListener('click', () =>{
    document.querySelector('.funtion3').style.display="none";
    document.querySelector('.black').style.display="none";
})
img4f.addEventListener('click', () =>{
    document.querySelector('.funtion4').style.display="none";
    document.querySelector('.black').style.display="none";
})

black.addEventListener('click', () =>{
    document.querySelector('.funtion1').style.display="none";
    document.querySelector('.black').style.display="none";
})
black.addEventListener('click', () =>{
    document.querySelector('.funtion2').style.display="none";
    document.querySelector('.black').style.display="none";
})
black.addEventListener('click', () =>{
    document.querySelector('.funtion3').style.display="none";
    document.querySelector('.black').style.display="none";
})
black.addEventListener('click', () =>{
    document.querySelector('.funtion4').style.display="none";
    document.querySelector('.black').style.display="none";
})

