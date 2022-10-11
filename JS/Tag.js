// import {refreshList} from '/JS/SearchInButtons.js'




function createTag(){
	const elementArray = document.querySelectorAll('.elementInArray')
	elementArray.forEach(element => {
		element.addEventListener('click', () => {
			/* 			let parentElement = Node.parentElement
			if (parentElement.classList.contains('Blue')) {
				console.log('oui')
			} */
			const divOfTags = document.getElementById('tag')

			console.log(element.textContent)
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
			pForTag.innerHTML = `${element.textContent}`
			divForTag.appendChild(pForTag)
			divForTag.appendChild(svgForTag)
			divOfTags.appendChild(divForTag)

		})

	})


    

}

export{createTag}