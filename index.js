let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")

const coefficientOne =  3.281
const coefficientTwo =   0.264
const coefficientThree =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let meterToFeet = baseValue * coefficientOne
    let feetToMeter = baseValue / coefficientOne
    let literToGallon = baseValue * coefficientTwo
    let gallonToLiter = baseValue / coefficientTwo
    let kiloToPound = baseValue * coefficientThree
    let poundTokilos = baseValue / coefficientThree
    lengthEl.innerHTML = `${baseValue} meter = ${meterToFeet.toFixed(3)} feet | ${baseValue} feet = ${feetToMeter.toFixed(3)} meters`
    massEl.innerHTML = `${baseValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${baseValue} pounds = ${poundTokilos.toFixed(3)} kilos`
    volumeEl.innerHTML = `${baseValue} liter = ${literToGallon.toFixed(3)} gallons | ${baseValue} gallons = ${gallonToLiter.toFixed(3)} liters` 

})

