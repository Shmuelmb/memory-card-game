function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const cardsArray = [    
    '&#128525;','&#128525;',
    '&#128561;','&#128561;',
    '&#128564;','&#128564;',
    '&#128520;','&#128520;',
    '&#128545;','&#128545;',
    '&#129313;','&#129313;']

shuffleArray(cardsArray)
const inner = document.querySelectorAll('.inner')
const back = document.querySelectorAll('.back')
let count = 0
back.forEach(element => {
    element.innerHTML = cardsArray[count]
    count += 1

})

let chance = []
inner.forEach( event => {
    const innerValue = parseInt(event.attributes.value.value) + 1
    event.addEventListener('click', () => {
        for (i = 1; i < 13; i++){
            const Back = document.querySelector(`.back${i}`)
            if (innerValue  === i ){
                Back.style.transform = "none"
                chance.push(Back.innerHTML)
            } if (chance.length === 2){

            }
        } 
    })
})

    
// קודם כל צריך לבדוק איך הופכים כרטיס - בוצע
// אחר כך צריך לבדוק איך לגרום לכרטיס להתהפך לאחר שתי ניחושים
// לאחר מכן לגלות איך לבודק תוכן של כרטיסים
// אחר כך לבדוק איך להשאיר את הכרטיסים ששווים ולהפוך את כל השאר