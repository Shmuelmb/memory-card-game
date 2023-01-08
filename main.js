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

shuffleArray(cardsArray) // shuffle all emoji's
const inner = document.querySelectorAll('.inner')
const backs = document.querySelectorAll('.back ')
const modal = document.querySelector('.modal')
modal.addEventListener('click', () =>{ //after win the game this func realod the page
    location.reload()
})

let count = 0
backs.forEach(element => { //enter all emoji's to cards
    element.innerHTML = cardsArray[count]
    count += 1
})


let winner = [] //this array counts all correct guesses 
let chance = [] //this array temporarily stores the 2 selected guesses
inner.forEach(event => { 
    event.addEventListener('click',() => {
        const innerValue = parseInt(event.attributes.value.value) + 1 // make sure the current element by id
        const backItem = document.querySelector(`.back${innerValue}`)
        backItem.style.transform = 'none'
        chance.push(backItem)
        if (chance.length === 2){
            if (chance[1] === chance[0]){
                chance.pop()
            }else if (chance[1].innerHTML === chance[0].innerHTML){
                setTimeout(() => {
                    chance[1].style.backgroundColor = 'green'
                    chance[0].style.backgroundColor = 'green'
                    chance = []
                    winner.push(' ')
                },500)
                
            } 
            else {
                setTimeout(function(){
                    chance[1].style.transform = 'rotateY(180deg)'
                    chance[0].style.transform = 'rotateY(180deg)'
                    chance = []
                },1000)
            }
        }else if( chance.length > 2){
            let y = chance.slice(2)
            y.forEach((event) => {event.style.transform = 'rotateY(180deg)'})
           
        } else if (winner.length === 5){
            setTimeout(() => {
                modal.style.display = 'block'
            },2000)
            
        }
    }) 
}) 

