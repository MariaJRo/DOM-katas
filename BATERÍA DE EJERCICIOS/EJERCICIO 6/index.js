//Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

let pToRemove = document.querySelector('.fn-remove-me')

if (pToRemove) {
  pToRemove.remove()
}
