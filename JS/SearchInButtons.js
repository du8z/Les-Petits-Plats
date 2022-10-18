import {recipes} from '/JS/recipes.js'
import {GetIngredient} from '/JS/main.js'
import {GetUtensils} from '/JS/main.js'
import {GetDevice} from '/JS/main.js'
import {DisplayList} from '/JS/main.js'

const searchBarInButtonIngredient = document.querySelector('#inputIngredient')
searchBarInButtonIngredient.addEventListener('keydown', (e) =>{
	const searchedLettersInButton = e.target.value
	const BtnIngredient = document.querySelector('#BtnIngredient') 
	let Array = GetIngredient(recipes)
	researchInButton(searchedLettersInButton, Array, BtnIngredient)
      
})
const searchBarInButtonDevice = document.querySelector('#inputDevice')
searchBarInButtonDevice.addEventListener('keydown', (e) =>{
	const searchedLettersInButton = e.target.value
	const BtnDevice = document.querySelector('#BtnDevice') 
	let Array = GetDevice(recipes)
	researchInButton(searchedLettersInButton, Array, BtnDevice)
      
})
const searchBarInButtonUtensils = document.querySelector('#inputUtensils')
searchBarInButtonUtensils.addEventListener('keydown', (e) =>{
	const searchedLettersInButton = e.target.value
	const BtnDevice = document.querySelector('#BtnUtensils') 
	let Array = GetUtensils(recipes)
	researchInButton(searchedLettersInButton, Array, BtnDevice)
      
})

const btnBlue = document.querySelector('#CrossOnBlue')
const btnRed = document.querySelector('#CrossOnRed')
const btnGreen = document.querySelector('#CrossOnGreen')



function researchInButton(letters, array, rightBtn){
	rightBtn.classList.remove('testBTNAfter')
	btnBlue.classList.remove('AllBtnAfter')
	btnRed.classList.remove('AllBtnAfter')
	btnGreen.classList.remove('AllBtnAfter')
	let a = []
	
	if (letters.length > 2){
		rightBtn.getElementsByClassName.display = 'none'
		const filteredLetters = array.filter(el => el.toLowerCase().includes(letters.toLowerCase()))
		filteredLetters.forEach(filteredLetter =>{
			a.push(filteredLetter)
			refreshList (a, rightBtn)
			
		})

	} 


}

function refreshList (array, location){
	location.innerHTML = ''
	document.querySelectorAll('.elementInArray')
	DisplayList(array, location)
	location.classList.add('testBTNAfter')
	location.previousSibling.previousSibling.previousSibling.previousSibling.classList.add('AllBtnAfter')
	
        
}

export{refreshList}
