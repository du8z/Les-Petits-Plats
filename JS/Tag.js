import {recipes} from '/JS/recipes.js'
import {displayGrid} from './main.js'





function createTag(){
	const elementArray = document.querySelectorAll('.elementInArray')
	elementArray.forEach(element => {
		element.addEventListener('click', () => {

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
			if (element.parentElement.classList.contains('blue')){
				
				divForTag.classList.add('blue') 

			}
			if (element.parentElement.classList.contains('green')){
				
				divForTag.classList.add('green') 

			}
			if (element.parentElement.classList.contains('red')){
				
				divForTag.classList.add('red') 

			}

			deleteTag(divForTag, divOfTags, elementTextContent)
			const arrayRecipes = presentItem()
			let filterArray = selectRightFilter(element, elementTextContent, arrayRecipes)
			displayGrid(filterArray)

		})
	})


    

}

function deleteTag(divForTag, divOfTags){
	let filterArray = []

	divForTag.addEventListener('click', ()=>{

		divOfTags.removeChild(divForTag)
		const sectionGrid = document.querySelector('#sectionGrid')
		sectionGrid.innerHTML = ''
		const divTag = document.querySelectorAll('.divTag')
		filterArray = recipes
		if (divTag.length > 0 ){
			let elements = divOfTags.childNodes
			elements.forEach((el)=> {
				let element = el.firstChild
				let elementTextContent = element.innerHTML
				
				filterArray = selectRightFilter(element, elementTextContent, filterArray)


				console.log(filterArray)
				
			})
			

		}

		console.log(filterArray)
		displayGrid(filterArray)
		

		
	}) 
}

function filterIngredient(elementTextContent, arrayRecipes ){
	let a = []
	arrayRecipes.forEach(el => {
		

		let arrayWithIngredient = el.ingredients
		const arrayIngredientFiltred = arrayWithIngredient.filter(ingredient => ingredient.ingredient.toLowerCase().includes(elementTextContent.toLowerCase()))
			
		if (arrayIngredientFiltred != '') {
			a.push(el)
		} 
	})
	const sectionGrid = document.querySelector('#sectionGrid')
	sectionGrid.innerHTML = ''
	return a
}

function filterDevice(elementTextContent, arrayRecipes){
	let a = []
	arrayRecipes.forEach(el => {

		if (el.appliance === elementTextContent){
			a.push(el)
		}
	})
	const sectionGrid = document.querySelector('#sectionGrid')
	sectionGrid.innerHTML = ''
	return a
}

function filterUtensils(elementTextContent, arrayRecipes){
	let a = []
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




function selectRightFilter(element, elementTextContent, arrayRecipes) {
	const divInTag = document.querySelectorAll('.divTag')
	let filterArray = []
	divInTag.forEach(() => {
		// console.log(element)
		if (element.parentElement.classList.contains('blue')){
			filterArray = filterIngredient(elementTextContent, arrayRecipes) // push
			
		}
		if (element.parentElement.classList.contains('red')){
			filterArray = filterUtensils(elementTextContent, arrayRecipes)
		}
		if (element.parentElement.classList.contains('green')){
			filterArray = filterDevice(elementTextContent, arrayRecipes)
		}
		
	})
	return filterArray
}


function presentItem(){
	let a = []
	const allItemHTMLCollection = document.getElementsByClassName('NameInArticle')
	const allItem = [...allItemHTMLCollection]

	allItem.forEach(element => {

		const string4 = new String(`${element.innerHTML}`)
		const nameElement = string4.slice('/')
		const nameElementTrim = nameElement.trim()
		const List = recipes.filter(elt => elt.name === nameElementTrim)
		a.push(List)
	})
	const flat = a.flat()
	return flat
}


export{createTag}
export{presentItem}