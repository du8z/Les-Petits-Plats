/* import {recipes} from '/JS/recipes.js'
import {displayGrid  } from './main.js'

function filterElements(letters, cards) {
	let a =[]
	if (letters.length > 2 ){
		for (let i = 0; i < cards.length; i++) {
			if (cards[i].textContent.toLowerCase().includes(letters.toLowerCase())){
				a.push(cards[i])
				console.log(a)
				displayGridWithCard(a)
			// eslint-disable-next-line no-empty
			} else {

			}
            
		}
        
	} else if (letters.length < 2){
		const sectionGrid = document.querySelector('#sectionGrid')
		sectionGrid.innerHTML = ''
		displayGrid(recipes)
	}

    
}

function displayGridWithCard(cardsFilter){
	const sectionGrid = document.querySelector('#sectionGrid')
	sectionGrid.innerHTML = ''
	for (let i = 0; i < cardsFilter.length; i++) {
		console.log(cardsFilter)
		let newArticle = cardsFilter[i]
		sectionGrid.appendChild(newArticle)
	}

}

const searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('change', (e) =>{
	const searchedLetters = e.target.value
	const cards = document.querySelectorAll('.articleInGrid')
	filterElements(searchedLetters, cards)
}) */