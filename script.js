/*---------Nav Bar------------ */

const menuBtn = document.querySelector(".menu-icon span");
      const searchBtn = document.querySelector(".search-icon");
      const cancelBtn = document.querySelector(".cancel-icon");
      const items = document.querySelector(".nav-items");
      const form = document.querySelector("form");
      menuBtn.onclick = ()=>{
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }
      cancelBtn.onclick = ()=>{
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active"); 
      }
      searchBtn.onclick = ()=>{
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }




      /*---------Slidder Data------------ */






// Store of Main Slider
const sliderData = [
    {
        imgSrc : 'images/1.jpeg',
        Caption : 'Best Offer'
    },
    {
        imgSrc : 'images/2.png',
        Caption : 'Best Offer - 2'
    },
    {
        imgSrc : 'images/3.jpg',
        Caption : 'Best Offer -3'
    },
    {
        imgSrc : 'images/3.jpg',
        Caption : 'Best Offer -4'
    },

]
let sliderContainer  = document.getElementById('slider-container')
 let slidesData = sliderData.map((data)=>{
    return(`
    <div class="slides">
                <img src="${data.imgSrc}" alt="" />
                <div class="caption">${data.Caption}</div>
            </div>
    `)
 })

 sliderContainer.innerHTML += slidesData










let slideIndex = 0;

slideShow(slideIndex)
function controller(x){
    console.log('VAlue of x is : ', x)
    slideIndex += x;
    // slideIndex = slideIndex+x;  0+1 = 1
    console.log('SliderIndex Num is : ',slideIndex)
    slideShow(slideIndex)

}


function slideShow(num){

    let slider = document.getElementsByClassName('slides') 
    
    if(num === slider.length){
        slideIndex =0
        num = 0
    }
    if(num < 0){
        slideIndex = slider.length-1
         num = slider.length-1
    }
    for(i of slider){
        i.style.display = 'none'
    }       
    slider[num].style.display = 'block'

    
    

}








/*  --------------Product Slider --------- */
let box = document.getElementById('cardbox')
console.log(box)

const next = () => {
    let width = box.clientWidth
    // console.log(width)
    box.scrollLeft = box.scrollLeft+width
    console.log(box.scrollLeft)
}
const prev = () => {
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft-width
    console.log(box.scrollLeft)
}







