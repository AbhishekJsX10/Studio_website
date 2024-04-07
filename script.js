

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// // var a= document.querySelector("#ele1")
// // var image=a.getAttribute("data-image")


// //  ye wala box k liye hai
// var elemC = document.querySelector("#elem-container")
// var fixed = document.querySelector("#fixed-image")
// elemC.addEventListener("mouseenter", function () {
//     fixed.style.display = "block"
//     // alert("entery")
// })
// elemC.addEventListener("mouseleave", function () {
//     fixed.style.display = "none"
//     // alert("exit")
// })


// // ye wala alag alg images k liye 

// // var elem1=document.querySelector("#ele1")
// // elem1.addEventListener("mouseenter",function(){
// //     var image= elem1.getAttribute("data-image")
// //     fixed.style.backgroundImage=`url(${image})`
// // })



// var elems=document.querySelectorAll(".ele")
// // nodelist=array
// elems.forEach(function(e){
//     e.addEventListener("mouseenter",function(){
//         let image = e.getAttribute("data-image")
//         fixed.style.backgroundImage = `url(${image})`
//     })
// })



function page4Animation(){
   
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
    // alert("entery")
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
    // alert("exit")
})

var elems=document.querySelectorAll(".ele")
// nodelist=array
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}


page4Animation()

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
}

swiperAnimation()






const cursor=document.querySelector(".cursor")
document.addEventListener("mousemove",(e)=>{
    let mouseX = e.pageX
    let mouseY = e.pageY
    // cursor.style.top= mouseY-20+"px"
    cursor.style.top= mouseY+"px"
    cursor.style.left=mouseX+"px"
})


var page4 = document.querySelector("#page4")
page4.addEventListener("mouseleave",(e)=>{
    cursor.style.display="none"
}) 

page4.addEventListener("mouseenter",(e)=>{
    cursor.style.display="flex"
}) 













