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
function GetDevice (recipes){
    let b = []
    
    recipes.forEach(recipe=>{
        let appliance = recipe.appliance
        b.push(appliance)
    })
    let unique = [...new Set(b)];
/*     recipes.forEach(recipe => {
        recipe.appliance.forEach(appliance=> {
            b.push(appliance)
        })
    }); */
    return unique;
}


function GetUstensils(recipes){
    let b = []
    recipes.forEach(recipe => {
        recipe.ustensils.forEach(ustensil=> {
            b.push(ustensil)
        })
    });
 
    let unique = [...new Set(b)];
    return unique;
}

function GetIngredient(recipes){
let b = []

recipes.forEach(recipe=> {
    recipe.ingredients.forEach(ingredient=>{
        b.push(ingredient.ingredient)
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
            location.appendChild(divIng)
        }) 
    
}
