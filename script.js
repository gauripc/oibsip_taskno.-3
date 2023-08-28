let celsiusInput=document.querySelector('#celsius > input')
let faherenheitInput=document.querySelector('#faherenheit > input')
let kelvinInput=document.querySelector('#kelvin > input')

let btn=document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input',function(){
    let ctemp=parseFloat(celsiusInput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15

    faherenheitInput.value=roundNumber(ftemp)
    kelvinInput.value=roundNumber(ktemp )
})

faherenheitInput.addEventListener('input',function(){
    let ftemp=parseFloat(faherenheitInput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9)+273.15

    celsiusInput.value=roundNumber(ctemp)
    kelvinInput.value=roundNumber(ktemp )
})

kelvinInput.addEventListener('input',function(){
    let ktemp=parseFloat(kelvinInput.value)
    let ftemp=(ktemp-273.15)*(9/5)+32
    let ctemp=ktemp-273.15

    faherenheitInput.value=roundNumber(ftemp)
    celsiusInput.value=roundNumber(ctemp )
})

btn.addEventListener('click',()=>{
    celsiusInput.value=""
    faherenheitInput.value=""
    kelvinInput.value=""
})