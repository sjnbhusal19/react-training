
//getElementByClass

// querySelector()

const heading=document.querySelector(".first")
console.log(heading)

// heading.innerText+="I love to do it"

heading.innerHTML+="<strong>HTML</strong>"

heading.style.fontSize="11px"

heading.style.color='red'


const heading1=document.querySelectorAll(".first1")

console.log(heading1)

heading1.forEach((hed)=>{
    hed.style.color="yellow"
})