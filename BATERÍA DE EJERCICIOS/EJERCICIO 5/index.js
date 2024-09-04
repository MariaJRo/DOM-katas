//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

let ulLi = document.createElement('ul')
ulLi.innerHTML = ''
document.body.appendChild(ulLi)

for (let i = 0; i < albums.length; i++) {
  let li = document.createElement('li')
  li.innerText = albums[i]
  ulLi.appendChild(li)
}
