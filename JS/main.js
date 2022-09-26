import {recipes} from '/JS/recipes.js'


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
    });
}
displayGrid(recipes)

function test(recipe){
    const ul = document.createElement('ul')
    recipe.ingredients.forEach(ingredient => {
        let li = document.createElement('li')
        li.innerHTML = `${ingredient.ingredient}: ${ingredient.quantity}  ` 
        ingredient.unit ? li.innerHTML += ingredient.unit : ''
        ul.appendChild(li)
    });
    return ul
}
// Mettre la premiere lettre en majuscule 
function majFirst(a){
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}
function GetDevice (recipes){
    let b = []
    
    recipes.forEach(recipe=>{
        let appliance = recipe.appliance
        b.push(majFirst(appliance))
    })
    let unique = [...new Set(b)];
    return unique;
}

function GetUstensils(recipes){
    let b = []
    recipes.forEach(recipe => {
        recipe.ustensils.forEach(ustensil=> {
            b.push(majFirst(ustensil))
        })
    });
 
    let unique = [...new Set(b)];
    return unique;
}

function GetIngredient(recipes){
let b = []

recipes.forEach(recipe=> {
    recipe.ingredients.forEach(ingredient=>{
        b.push(majFirst(ingredient.ingredient))
    })
})
let unique = [...new Set(b)];
return unique;
}

function dropDown(){

    document.querySelector('.blue').addEventListener('click', ()=>{
        const location = document.getElementById('BtnIngredient')
        location.innerHTML = ""
        const btnBlue = document.querySelector('#CrossOnBlue')
        btnBlue.classList.toggle('crossOnBtn')
        btnBlue.classList.toggle('btnAfter')
        btnBlue.classList.toggle('btnAfterBlue')
        const inputDevice = document.querySelector('#inputIngredient')
        inputDevice.classList.toggle('displayBlock')
        document.querySelector('#BtnIngredient').classList.toggle('displayGrid')
        DisplayList(GetIngredient(recipes), location)
    })

    document.querySelector('.red').addEventListener('click', ()=>{
        const location = document.querySelector('#BtnUstensils')
        location.innerHTML = ""
        const btnRed = document.querySelector('#CrossOnRed')
        btnRed.classList.toggle('crossOnBtn')
        btnRed.classList.toggle('btnAfter')
        btnRed.classList.toggle('btnAfterRed')
        const inputUtensils = document.querySelector('#inputUtensils')
        inputUtensils.classList.toggle('displayBlock')
        document.querySelector('#BtnUstensils').classList.toggle('displayGrid')
        DisplayList(GetUstensils(recipes), location)


    })

    document.querySelector('.green').addEventListener('click', ()=>{
        const location = document.getElementById('BtnDevice')
        location.innerHTML = ""
        const btnGreen = document.querySelector('#CrossOnGreen')
        btnGreen.classList.toggle('crossOnBtn')
        btnGreen.classList.toggle('btnAfter')
        btnGreen.classList.toggle('btnAfterGreen')
        const inputDevice = document.querySelector('#inputDevice')
        inputDevice.classList.toggle('displayBlock')
        document.querySelector('#BtnDevice').classList.toggle('displayGrid')
        DisplayList(GetDevice(recipes), location)
    })
}
dropDown()

function DisplayList(ingredients, location){
        
        ingredients.forEach(ingredient =>{
            let divIng = document.createElement('div')
            divIng.innerHTML = ingredient
            divIng.classList.add('cursor')
            divIng.classList.add('elementInArray')
            location.appendChild(divIng)
        }) 
    
}

const searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('change', (e) =>{
    const searchedLetters = e.target.value;
    const cards = document.querySelectorAll('.articleInGrid')
    filterElements(searchedLetters, cards);
})

/* function filterElements(letters, cards) {
    let a =[]
    if (letters.length > 2 ){
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].textContent.toLowerCase().includes(letters.toLowerCase())){
                a.push(cards[i])
                console.log(a);
                displayGridWithCard(a)
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
        console.log(cardsFilter);
        let newArticle = cardsFilter[i]
        sectionGrid.appendChild(newArticle)
    }

} */

function filterElements(letters, cards){
    let a =[]
    if (letters.length > 2 ) {
        cards.forEach(card => {
           if (card.textContent.toLowerCase().includes(letters.toLowerCase())){
            a.push(card)
            console.log(a);
            displayGridWithCard(a)
           }
        });
    } else if (letters.length < 2 ) {
        const sectionGrid = document.querySelector('#sectionGrid')
        sectionGrid.innerHTML = ''
        displayGrid(recipes)
    }
}

function displayGridWithCard(cardsFilter){
    const sectionGrid = document.querySelector('#sectionGrid')
    sectionGrid.innerHTML = ''
    cardsFilter.forEach(cardFiltered =>{
        console.log(cardFiltered);
        let newArticle = cardFiltered
        sectionGrid.appendChild(newArticle)
    })

    
}

const searchBarInButton = document.querySelector('#inputIngredient')
searchBarInButton.addEventListener('change', (e) =>{
    const searchedLetters = e.target.value;
    let Array = GetIngredient(recipes)
    researchInButton(searchedLetters, Array);
})



function researchInButton(letters, array){
    let a = []
    if (letters.length > 2){
        
    const filteredLetters = array.filter(el => el.includes(letters))
    filteredLetters.forEach(filteredLetter =>{
        
        a.push(filteredLetter)
        
    })
    const location = searchBarInButton
        DisplayList(a, location)  
    }
}