/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("quantity")

let massText = document.getElementById("mass")
let lengthText = document.getElementById("length")
let volumeText = document.getElementById("volume")

function meterToFeet(value) {
    return (value * 3.281).toFixed(3)
}

function literToGallon(value) {
    return (value * 0.264).toFixed(3)
}

function kiloToPound(value) {
    return (value * 2.204).toFixed(3)
}

function feetToMeter(value) {
    return (value / 3.281).toFixed(3)
}

function gallonToLiter(value) {
    return (value / 0.264).toFixed(3)
}

function poundToKilo(value) {
    return (value / 2.204).toFixed(3)
}

convertBtn.addEventListener("click", function () {
    let value = parseFloat(inputEl.value).toFixed(3)

    if (isNaN(value)) return

    massText.textContent =
        `${value} kilos = ${kiloToPound(value)} pounds | ` +
        `${value} pounds = ${poundToKilo(value)} kilos`

    lengthText.textContent =
        `${value} meters = ${meterToFeet(value)} feet | ` +
        `${value} feet = ${feetToMeter(value)} meters`

    volumeText.textContent =
        `${value} liters = ${literToGallon(value)} gallons | ` +
        `${value} gallons = ${gallonToLiter(value)} liters`
})