import {recipes} from '/JS/recipes.js'
import {displayGrid} from './main.js'
const sectionGrid = document.querySelector('#sectionGrid')
const searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('keydown', (e) =>{
	sectionGrid.classList.remove('flexCenter')
	const searchedLetters = e.target.value
	const cards = document.querySelectorAll('.articleInGrid')
	filterElements(searchedLetters, cards)
})

function filterElements(letters, cards){
	let a =[]
	if (letters.length > 2 ) {
		// Si l'article contient le text que l'utilisateur a entrée alors le tableau filtre les articles
		const test = Array.from(cards)
		const filtredArray = test.filter(el => el.textContent.toLowerCase().includes(letters.toLowerCase()))
		if(filtredArray != ''){
			filtredArray.forEach(card => {
			
				a.push(card)
				displayGridWithCard(a)
				
			})
		} else {
			sectionGrid.innerHTML = ''
			const nothingWasFound = document.createElement('p')
			nothingWasFound.innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.'
			nothingWasFound.classList.add('pOfNothing')
			sectionGrid.classList.add('flexCenter')
			sectionGrid.appendChild(nothingWasFound)
		}

	} else if (letters.length < 2 ) {
		const sectionGrid = document.querySelector('#sectionGrid')
		sectionGrid.innerHTML = ''
		displayGrid(recipes)
	}
}

function displayGridWithCard(cardsFilter){

	sectionGrid.innerHTML = ''
	cardsFilter.forEach(cardFiltered =>{
		let newArticle = cardFiltered
		sectionGrid.appendChild(newArticle)
	})

    
}

export{filterElements}
export{displayGridWithCard}