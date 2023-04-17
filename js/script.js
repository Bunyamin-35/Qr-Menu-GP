const cardDOM = document.querySelectorAll(".card")

cardDOM.forEach(item =>{
    item.addEventListener("click",()=>{
        removeActive()
        item.classList.add("active")
        
    })   
})

function removeActive() {
    cardDOM.forEach(item =>{
        item.classList.remove("active")
    })
}
