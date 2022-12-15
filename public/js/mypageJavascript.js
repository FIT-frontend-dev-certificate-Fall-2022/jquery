import maineTowns from '/data/maineTowns.js';


const goForwardButton = document.querySelector('#nextTown')
const goBackwardsButton = document.querySelector('#lastTown')

const townName = document.querySelector('.articleHeading')
const townImage = document.querySelector('.articlePicture')
const townText = document.querySelector('.articleText')

let currentIndex = 0;
const indexForwardHelperFunction = () => {

    if (currentIndex + 1 > maineTowns.length - 1){
        currentIndex = 0;
        return currentIndex
    } else{
        currentIndex = currentIndex + 1
        return currentIndex
    }
}

const indexBackwardsHelperFunction = () => {
    if (currentIndex - 1 < 0){
        currentIndex = maineTowns.length - 1;
        return currentIndex
    } else{
        currentIndex -= 1
        return currentIndex
    }
}

// goForwardButton.addEventListener()

const fonts = ["Serif", "Sans-serif", "Monospace", "Cursive", "Fantasy", "Times New Roman"]

goForwardButton.addEventListener('click', () => {
    const index = indexForwardHelperFunction()
    const town = maineTowns[index]
    const newFont = fonts[index]
    console.log(townName)
    townName.innerHTML = town.townName
    townName.style.fontFamily = newFont
    townImage.src = town.townImageHref
    townText.innerHTML = town.townDescription
})


goBackwardsButton.addEventListener('click', () => {
    const index = indexBackwardsHelperFunction()
    const town = maineTowns[index]
    townName.innerHTML = town.townName
    townImage.src = town.townImageHref
    townText.innerHTML = town.townDescription
})