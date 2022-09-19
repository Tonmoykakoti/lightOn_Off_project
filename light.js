const lightOff = document.querySelector('#lightOff')
const btnOff = document.querySelector('.btnOff')
const btnOn = document.querySelector('.btnOn')

btnOn.addEventListener('click', function(){
    lightOff.setAttribute('src','lighton.png')
})
btnOff.addEventListener('click', function(){
    lightOff.setAttribute('src','lightoff.png')
})