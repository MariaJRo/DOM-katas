//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

let ulAndLi = document.createElement('ul')
ulAndLi.innerText = ''

for (let i = 0; i < countries.length; i++) {
  let newLi = document.createElement('li')
  newLi.innerText = countries[i]
  ulAndLi.appendChild(newLi)
}

document.body.appendChild(ulAndLi)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removeElements = document.querySelectorAll('.fn-remove-me')

removeElements.forEach((element) => {
  element.remove()
})

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

let divHtml = document.querySelector('[data-function="printHere"]')

let ulLiDiv = document.createElement('ul')
ulLiDiv.innerText = ''

for (let i = 0; i < cars.length; i++) {
  let newLiDiv = document.createElement('li')
  newLiDiv.innerText = cars[i]
  ulLiDiv.appendChild(newLiDiv)
}
divHtml.appendChild(ulLiDiv)

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

let section = document.createElement('section')
section.innerText = ''
document.body.appendChild(section)

const countriess = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (let i = 0; i < countriess.length; i++) {
  let div = document.createElement('div')

  let h4 = document.createElement('h4')
  h4.innerText = countriess[i].title

  let img = document.createElement('img')
  img.src = countriess[i].imgUrl

  div.appendChild(h4)
  div.appendChild(img)

  section.appendChild(div)
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

let removeButton = document.createElement('button')
removeButton.innerText = 'Eliminar último div'
removeButton.id = 'removeLast'

document.body.appendChild(removeButton)

removeButton.addEventListener('click', () => {
  let allDivs = section.getElementsByTagName('div')
  if (allDivs.length > 0) {
    let lastDiv = allDivs[allDivs.length - 1]
    section.removeChild(lastDiv)
  }
})

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

let divsSection = section.getElementsByTagName('div')

for (let i = 0; i < divsSection.length; i++) {
  let button = document.createElement('button')
  button.innerText = 'Eliminar div'

  button.addEventListener('click', () => {
    section.removeChild(divsSection[i])
  })

  divsSection[i].appendChild(button)
}
