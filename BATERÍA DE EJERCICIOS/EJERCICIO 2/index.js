//1.1 Inserta dinamicamente en un html un div vacio con javascript.

let emptyDiv = document.createElement('div')
emptyDiv.innerText = ''
console.log(emptyDiv)
document.body.appendChild(emptyDiv)
emptyDiv.classList.add('ed')

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divAndP = document.createElement('div')
divAndP.innerText = ''
console.log(divAndP)
document.body.appendChild(divAndP)

let newP = document.createElement('p')
newP.innerText = 'Este div contiene una p con javascript'
console.log(newP)
divAndP.appendChild(newP)

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let divLoopAndP = document.createElement('div')
divLoopAndP.innerText = ''
console.log(divLoopAndP)
document.body.appendChild(divLoopAndP)

for (let i = 0; i < 6; i++) {
  let newPP = document.createElement('p')
  newPP.innerText = '6 nuevos p'
  console.log(newPP)
  divLoopAndP.appendChild(newPP)
}

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let pAlone = document.createElement('p')
pAlone.innerText = 'Soy dinámico!'
console.log(pAlone)
document.body.appendChild(pAlone)

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2Elements = document.getElementsByClassName('fn-insert-here')
let h2 = h2Elements[0]
h2.innerText = 'Wubba Lubba dub dub'
console.log(h2)

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

let ulAndLi = document.createElement('ul')
ulAndLi.innerText = ''
console.log(ulAndLi)
document.body.appendChild(ulAndLi)

for (let i = 0; i < apps.length; i++) {
  let newLi = document.createElement('li')
  newLi.innerText = apps[i]
  ulAndLi.appendChild(newLi)
}

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeElements = document.querySelectorAll('.fn-remove-me')

removeElements.forEach((element) => {
  element.remove()
})

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

let allDivs = document.querySelectorAll('div')

let secondP = document.createElement('p')
secondP.innerText = 'Voy en medio!'

allDivs[1].after(secondP)

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let insertHere = document.querySelectorAll('div.fn-insert-here')

for (let i = 0; i < insertHere.length; i++) {
  let pInsert = document.createElement('p')
  pInsert.innerText = 'Voy dentro!'
  insertHere[i].appendChild(pInsert)
}
