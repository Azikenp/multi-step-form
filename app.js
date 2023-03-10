const priceSpan = document.querySelectorAll(".price-span")
const spanYear = document.querySelectorAll("span.year");
const pYear = document.querySelectorAll("p.year")
const monthP = document.querySelector(".monthly-p");
const yearP = document.querySelector(".yearly-p");
const circle = document.querySelector(".circle");
const circleContainer = document.querySelector(".circle-container")

const planSelect = document.querySelectorAll(".option-active");
const planBtn = document.querySelector(".plan-btn")

const check = document.querySelectorAll("#check-input");
const checkDiv = document.querySelectorAll(".checkbox-div");

const addOnBtn = document.querySelector(".add-on-btn");
const price = document.querySelector(".price")
const secPrice = document.querySelector(".second-price")



circleContainer.addEventListener("click", function(){
    circle.classList.toggle("year")
    yearP.classList.toggle("light")
    monthP.classList.toggle("light")
    if (monthP.classList.contains("light")){
        priceSpan.forEach(function(e){
            e.style.display = "none"
        })
    } else{
        priceSpan.forEach(function(e){
            e.style.display = "block"
        })
    }

    if (monthP.classList.contains("light")){
        pYear.forEach(function(e){
            e.style.display = "block"
        })
    } else{
        pYear.forEach(function(e){
            e.style.display = "none"
        })
    }

    if (monthP.classList.contains("light")){
        spanYear.forEach(function(e){
            e.style.display = "block"
        })
    } else{
        spanYear.forEach(function(e){
            e.style.display = "none"
        })
    }
});

// Plan
planSelect.forEach(function(e){
    e.addEventListener("click", function(){
        e.classList.toggle("options-active")
    })
})



// Add ons
planBtn.addEventListener("click", function(){
    if(circle.classList.contains("year")){
        price.style.display = "none"
    }
})
