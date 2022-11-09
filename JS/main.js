import {recipes} from '/JS/recipes.js'
import {createTag} from '/JS/Tag.js'


function articleStructure(recipe){
	const sectionGrid = document.getElementById('sectionGrid')
	const sectionArticle = document.createElement('p')
	const structureOfArticle = 
`<div class="articleInGrid">
<div class="imgInGrid">
</div>
<div class="flexBetween topArticle">
    <div class="NameInArticle">${recipe.name}
    </div>
    <div class="flexCenter TimeInArticle">
        <svg  class="timeSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
        </svg>
        ${recipe.time} min
    </div>
</div>
<div class="flexBetween">
    <div class="ingredientInArticle">
    </div>
    <div class="recipeInArticle">${recipe.description}
    </div>
</div>
</div>`
	sectionArticle.innerHTML = structureOfArticle
	let oui = sectionArticle.querySelector('.ingredientInArticle')
	let ul = test(recipe)
	oui.appendChild(ul)

	sectionGrid.appendChild(sectionArticle)
	/* boardOfUstensils (recipe) */

}

function displayGrid(recipes){
	recipes.forEach(recipe => {
		articleStructure(recipe)
	})
}
displayGrid(recipes)

function test(recipe){
	const ul = document.createElement('ul')
	recipe.ingredients.forEach(ingredient => {
		let li = document.createElement('li')
		li.innerHTML = `${ingredient.ingredient}: ${ingredient.quantity}  ` 
		ingredient.unit ? li.innerHTML += ingredient.unit : ''
		ul.appendChild(li)
	})
	return ul
}
// Mettre la premiere lettre en majuscule 
function majFirst(a){
	return (a+'').charAt(0).toUpperCase()+a.substr(1)
}
function GetDevice(recipes){
	let b = []
    
	recipes.forEach(recipe=>{
		let appliance = recipe.appliance
		b.push(majFirst(appliance))
	})
	let unique = [...new Set(b)]
	return unique
}

function GetUtensils(recipes){
	let b = []
	recipes.forEach(recipe => {
		recipe.ustensils.forEach(utensil=> {
			b.push(majFirst(utensil))
		})
	})
 
	let unique = [...new Set(b)]
	return unique
}

function GetIngredient(recipes){
	let b = []

	recipes.forEach(recipe=> {
		recipe.ingredients.forEach(ingredient=>{
			b.push(majFirst(ingredient.ingredient))
		})
	})
	let unique = [...new Set(b)]
	return unique
}

function dropDown(){
	let filterArray = recipes
	// console.log(filterArray)
	document.querySelector('.blue').addEventListener('click', ()=>{
		const location = document.getElementById('BtnIngredient')
		location.innerHTML = ''
		const btnBlue = document.querySelector('#CrossOnBlue')
		let rightColorBtn =  btnBlue
		let color = 'Blue'
		toggleButton(rightColorBtn, color)



		const inputDevice = document.querySelector('#inputIngredient')
		inputDevice.classList.toggle('displayBlock')		
		document.querySelector('#BtnIngredient').classList.toggle('displayGrid')
		DisplayList(GetIngredient(recipes), location, filterArray)
		const btnRed = document.querySelector('#CrossOnRed')
		const btnGreen = document.querySelector('#CrossOnGreen')
		closeOtherButton(btnRed,'Red',  'inputUtensils', 'Utensils')
		closeOtherButton(btnGreen, 'Green',  'inputDevice', 'Device')
	})

	document.querySelector('.red').addEventListener('click', ()=>{
		const location = document.querySelector('#BtnUtensils')
		location.innerHTML = ''
		const btnRed = document.querySelector('#CrossOnRed')
		let rightColorBtn =  btnRed
		let color = 'Red'
		toggleButton(rightColorBtn, color)
		const inputUtensils = document.querySelector('#inputUtensils')
		inputUtensils.classList.toggle('displayBlock')
		document.querySelector('#BtnUtensils').classList.toggle('displayGrid')
		DisplayList(GetUtensils(recipes), location)
		const btnGreen = document.querySelector('#CrossOnGreen')
		const btnBlue = document.querySelector('#CrossOnBlue')

		closeOtherButton(btnGreen, 'Green',  'inputDevice', 'Device')
		closeOtherButton(btnBlue, 'Blue',  'inputIngredient', 'Ingredient')



	})

	document.querySelector('.green').addEventListener('click', ()=>{
		const location = document.getElementById('BtnDevice')
		location.innerHTML = ''
		const btnGreen = document.querySelector('#CrossOnGreen')
		let rightColorBtn =  btnGreen
		let color = 'Green'
		toggleButton(rightColorBtn, color)
		const inputDevice = document.querySelector('#inputDevice')
		inputDevice.classList.toggle('displayBlock')
		document.querySelector('#BtnDevice').classList.toggle('displayGrid')
		DisplayList(GetDevice(recipes), location)
		const btnBlue = document.querySelector('#CrossOnBlue')
		const btnRed = document.querySelector('#CrossOnRed')
		closeOtherButton(btnBlue, 'Blue',  'inputIngredient', 'Ingredient')
		closeOtherButton(btnRed,'Red',  'inputUtensils', 'Utensils')

	})
}
dropDown()

function DisplayList(ingredients, location, filterArray){
	ingredients.forEach(ingredient =>{
		let divIng = document.createElement('div')
		divIng.innerHTML = ingredient
		divIng.classList.add('cursor')
		divIng.classList.add('elementInArray')
		location.appendChild(divIng)
	}) 
	createTag(filterArray, ingredients)

    
}


function toggleButton(btn, color){
	btn.classList.toggle('crossOnBtn')
	btn.classList.toggle('btnAfter')
	btn.classList.toggle(`btnAfter${color}`)
}


function closeOtherButton(color1, color2,  input, category){
	if (color1.classList.contains('btnAfter')){
		let color = color2
		toggleButton(color1, color)

		const inputAll = document.querySelector(`#${input}`)
		inputAll.classList.toggle('displayBlock')

		document.querySelector(`#Btn${category}`).classList.toggle('displayGrid')

	}
}


export{GetIngredient}
export{GetDevice}
export{GetUtensils}
export{displayGrid}
export{DisplayList}