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


// const sliderData = [
//     {
//         imgSrc : 'images/1.jpeg',
//         sliderText : 'Text 1'
//     },
//     {
//         imgSrc : 'images/2.png',
//         sliderText : 'Text 2'
//     },
//     {
//         imgSrc : 'images/3.jpg',
//         sliderText : 'Text 3'
//     },
//     {
//         imgSrc : 'images/3.jpg',
//         sliderText : 'Text 4'
//     },

// ]

// let sliderContainer = document.getElementById('slider-container')
// // console.log(sliderContainer)
// let data = sliderData.map((mydata)=>{
//     return(
//         `
//         <div class="slides">
//                 <img src="${mydata.imgSrc}" alt="" />
//                 <div class="caption">${mydata.sliderText}</div>
//             </div>
//         `
//     )
// })
// sliderContainer.innerHTML += data

      /*---------Slider------------ */
// let slider = document.getElementsByClassName('slides')
// console.log(slider)
// var arr = [2, 7, 4, 6]
// console.log(arr)

let slideIndex = 0;

slideShow(slideIndex)
function controller(x){
    slideIndex += x;
    // console.log(slideIndex)
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

// var arr = [2, 6, 7, 3]
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])

// }
// for(value of arr){
//     console.log(value)
// }
// console.log(arr)




// let flag=0;
// function controller(x){
//     flag=flag+x;
//     slideshow(flag);
// }
// slideshow(flag);
// function slideshow(num){
//     let slides=document.getElementsByClassName('slides')
//     if(num==slides.length){
//         flag=0;
//         num=0;
//     }
//     if(num<0){
//         flag=slides.length-1;
//         num=slides.length-1;
//     }
//     for(let i of slides){
//         i.style.display="none"
//     }
//     slides[num].style.display="block";
// }

/*  --------------Product Slider --------- */