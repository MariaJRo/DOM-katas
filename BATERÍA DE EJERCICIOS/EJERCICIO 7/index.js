//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

let div = document.querySelector('[data-function="printHere"]')

let ulLi = document.createElement('ul')
ulLi.innerText = ''

for (let i = 0; i < places.length; i++) {
  let li = document.createElement('li')
  li.innerText = places[i]
  ulLi.appendChild(li)
}

div.appendChild(ulLi)
