const times = document.querySelectorAll(".hours")
const days = document.querySelectorAll(".daily")
const months = document.querySelectorAll(".monthly")
const weeks = document.querySelectorAll(".weekly")
const daily = document.getElementById("daily-input")
const weekly = document.getElementById("weekly-input")
const monthly = document.getElementById("monthly-input")

// monthly.addEventListener("click",event => {
//     if(event.target.checked){
//         times.forEach((classList) =>{
//             console.log(classList)
//         })
//     }
// })
weekly.addEventListener("click",()=> {
    for (const day of days){
        day.style.display = "none"
    }
    for (const week of weeks){
        week.style.display ="inline-block"
    }
    for (const month of months){
        month.style.display ="none"
    }
})

monthly.addEventListener("click",()=>{
    for (const day of days){
        day.style.display = "none"
    }
    for (const week of weeks){
        week.style.display ="none"
    }
    for (const month of months){
        month.style.display ="inline-block"
    }
})

daily.addEventListener("click",()=>{
    for (const day of days){
        day.style.display = "inline-block"
    }
    for (const week of weeks){
        week.style.display ="none"
    }
    for (const month of months){
        month.style.display ="none"
    }
})


