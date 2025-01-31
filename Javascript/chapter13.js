
// Append a tag
function addlang(lang){
    const li=document.createElement('li')
    li.innerHTML=`${lang}`
    document.querySelector(".taglang").appendChild(li)
}
addlang("python")
addlang("javascript")

// a Bit optimize line
function addoptlang(lang){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(lang))
    document.querySelector(".taglang").appendChild(li)
}
addoptlang("python")
addoptlang("javascript")

// Edit elements text
const seclang=document.querySelector("li:nth-child(2)")
const newli=document.createElement('li')
newli.textContent("Rubby")
seclang.replaceWith(newli)

// Remove element
const lastelm=document.querySelector("li:last-child")
lastelm.remove()

// Remove element text
const lastelmtxt=document.querySelector("li:last-child")
lastelmtxt.textContent='';

