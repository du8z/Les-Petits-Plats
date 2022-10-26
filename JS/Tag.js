import {recipes} from '/JS/recipes.js'
import {displayGrid} from './main.js'





function createTag(){
	const elementArray = document.querySelectorAll('.elementInArray')
	elementArray.forEach(element => {
		element.addEventListener('click', () => {
			const cards = document.querySelectorAll('.articleInGrid')
	
			const divOfTags = document.getElementById('tag')
			let elementTextContent = element.textContent
			
			let divForTag = document.createElement('div')
			divForTag.classList.add('divTag')
			divForTag.classList.add('flexAround')
			
			let svgForTag = document.createElement('p')
			svgForTag.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 5.75L5.75 10.25M5.75 5.75L10.25 10.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
			svgForTag.classList.add('flexCenter')
			svgForTag.classList.add('svgStyle')
			svgForTag.classList.add('cursor')
			
			let pForTag = document.createElement('p')
			pForTag.classList.add('flexCenter')
			pForTag.innerHTML = `${elementTextContent}`
			
			divForTag.appendChild(pForTag)
			divForTag.appendChild(svgForTag)
			divOfTags.appendChild(divForTag)
			

			deleteTag(divForTag, divOfTags, cards)
			selectRightFilter(element, divForTag, elementTextContent)

		})
	})


    

}

function deleteTag(divForTag, divOfTags){
	divForTag.addEventListener('click', ()=>{
		divOfTags.removeChild(divForTag)
		const sectionGrid = document.querySelector('#sectionGrid')
		sectionGrid.innerHTML = ''
		displayGrid(recipes)
	}) 
}

function filterIngredient(elementTextContent){
	let a = []
	const arrayRecipes = recipes

	arrayRecipes.forEach(el => {
		

		let arrayWithIngredient = el.ingredients
		const arrayIngredientFiltred = arrayWithIngredient.filter(ingredient => ingredient.ingredient.toLowerCase().includes(elementTextContent.toLowerCase()))
			
		if (arrayIngredientFiltred != '') {
			a.push(el)
		} 
	})
	const sectionGrid = document.querySelector('#sectionGrid')
	sectionGrid.innerHTML = ''
	console.log(a)
	return a
}

function filterDevice(elementTextContent){
	const arrayRecipes = recipes
	let a = []
	arrayRecipes.forEach(el => {

		if (el.appliance === elementTextContent){
			a.push(el)
		}
	})
	console.log(a)
	const sectionGrid = document.querySelector('#sectionGrid')
	sectionGrid.innerHTML = ''
	return a
}

function filterUtensils(elementTextContent){
	const arrayRecipes = recipes
	let a = []
	console.log(arrayRecipes)
	arrayRecipes.forEach(el => {
		let arrayWithUtensils = el.ustensils
		const arrayUtensilsFiltred = arrayWithUtensils.filter(utensil => utensil.toLowerCase().includes(elementTextContent.toLowerCase()))

		if (arrayUtensilsFiltred != ''){
			a.push(el)
		}
	})
	const sectionGrid = document.querySelector('#sectionGrid')
	sectionGrid.innerHTML = ''
	return a
}




function selectRightFilter(element, divForTag, elementTextContent) {
	const divIdTag = document.querySelector('#tag')
	let filterArray = []
	const divInTag = document.querySelectorAll('.divTag')
	divInTag.forEach(el => {
		if (element.parentElement.classList.contains('blue')){
			divForTag.classList.add('blue')
			filterArray = filterIngredient(elementTextContent)

		}
		if (element.parentElement.classList.contains('red')){
			divForTag.classList.add('red')
			filterArray = filterUtensils(elementTextContent)

		}
		if (element.parentElement.classList.contains('green')){
			divForTag.classList.add('green')
			filterArray = filterDevice(elementTextContent)

		}
	})

	displayGrid(filterArray)

}


/* function presentItem(){
	const arrayRecipes = recipes
	let a = []
	const allItemHTMLCollection = document.getElementsByClassName('NameInArticle')
	const allItem = [...allItemHTMLCollection]
	allItem.forEach(element => {
		
		const nameElement = element.innerHTML
		console.log(nameElement)
		const List = arrayRecipes.filter(elt => elt.nameElement === nameElement)
		a.push(List)
		// el.nameElement === nameElement
	})
	console.log(a)
} */


export{createTag}