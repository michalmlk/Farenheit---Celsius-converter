//values
const inputVal = document.querySelector('.val')
const pInfo = document.querySelector('.header')
const pResult = document.querySelector('.result')
//buttons
const convertButton = document.querySelector('.action')
const resetButton = document.querySelector('.reset')
const swapButton = document.querySelector('.swap')
//convert functions
let result
const Convert = () => {
	const tempVal = inputVal.value
	if (inputVal.classList.contains('active')) {
		result = ((tempVal - 32) / 1.8).toFixed(1)
		pResult.textContent = `${tempVal} °F is ${result} °C`
	} else {
		result = (tempVal * 1.8 + 32).toFixed(1)
		pResult.textContent = `${tempVal} °C is ${result} °F`
	}
	inputVal.value = ''
}
//swap
const SetUnit = () => {
	inputVal.classList.toggle('active')
	if (inputVal.classList.contains('active')) {
		pInfo.textContent = '°F to °C converter'
	} else {
		pInfo.textContent = '°C to °F converter'
	}
}
//returs default values
const resetAll = () => {
	inputVal.classList.remove('active')
	pInfo.textContent = '°C to °F converter'
	pResult.textContent = ''
	inputVal.value = ''
}
convertButton.addEventListener('click', Convert)
swapButton.addEventListener('click', SetUnit)
resetButton.addEventListener('click', resetAll)
