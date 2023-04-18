const{createApp} = Vue;
    createApp({

      data(){
        return{

        }

      }
    }).mounted('#app')

const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const itemsWrapper = document.querySelector('.items-wrapper')
const itemsCircles = document.querySelector('.circles')
const itemsthumb = document.querySelector('.thumbs')

//creo l'array con le immagini
const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]
//creo il contatore con cui interagisce tutto
let counterSlider = 0;
//faccio un ciclo for dove ciclo tutte le immagini e punti
for(let i = 0; i < images.length; i++){
  const image = images[i]
  itemsWrapper.innerHTML +=`
  <img class="item hide" src="${image}">
  `,
  itemsCircles.innerHTML += `
  <div class="circle"></div>
  `,
  itemsthumb.innerHTML +=`
  <img class="th" src="${image}">
  `
}
//Scrivo che il bottone prev a indice zero non c'è 

const thumbCollection= document.getElementsByClassName('th');

thumbCollection[counterSlider].classList.add('activeT')

//prendo tutti gli items
const circlesCollection = document.getElementsByClassName('circle');
//dico che dipendendo dal contatore i puntini prendono active
circlesCollection[counterSlider].classList.add('active')

const itemsCollection = document.getElementsByClassName
('item')
itemsCollection[counterSlider].classList.remove('hide')

//faccio un addevent del bottone destro e quello sinistro dove faccio apparire e comparire le classi
btnNext.addEventListener('click',function(){
thumbCollection[counterSlider].classList.remove('activeT')
circlesCollection[counterSlider].classList.remove('active')
itemsCollection[counterSlider].classList.add('hide')
counterSlider++
if(counterSlider === images.length) counterSlider = 0;
thumbCollection[counterSlider].classList.add('activeT')
itemsCollection[counterSlider].classList.remove('hide')
circlesCollection[counterSlider].classList.add
('active')


})

btnPrev.addEventListener('click',function(){
thumbCollection[counterSlider].classList.remove('activeT')
circlesCollection[counterSlider].classList.remove('active')
itemsCollection[counterSlider].classList.add('hide')
counterSlider--
if(counterSlider < 0) counterSlider = images.length -1;
thumbCollection[counterSlider].classList.add('activeT')
circlesCollection[counterSlider].classList.add('active')
itemsCollection[counterSlider].classList.remove('hide')

})

















