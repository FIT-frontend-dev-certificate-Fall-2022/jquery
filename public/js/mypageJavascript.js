import maineTowns from '/data/maineTowns.js';

let currentIndex = 0;

const goForwardButton = document.querySelector('#nextTown')
const goBackwardsButton = document.querySelector('#lastTown')

const townName = document.querySelector('.articleHeading')
const townImage = document.querySelector('.articlePicture')
const townText = document.querySelector('.articleText')

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
    console.log('~~~', currentIndex)
    if (currentIndex - 1 < 0){
        currentIndex = maineTowns.length - 1;
        return currentIndex
    } else{
        currentIndex -= 1
        return currentIndex
    }
}

// goForwardButton.addEventListener()

goForwardButton.addEventListener('click', () => {
    const index = indexForwardHelperFunction()
    const town = maineTowns[index]
    townName.innerHTML = town.townName
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