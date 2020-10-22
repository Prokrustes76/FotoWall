let mouseX = 0, 
    mouseY = 0, 
    newPhase = false,
    body = document.getElementById('body')
    

window.addEventListener('keydown', keyDown)
window.addEventListener('mousemove', (event) => {
  mouseX = event.clientX
  mouseY = event.clientY
})

function keyDown(event) {
  if (event.keyCode == 106)
    nextPhase()
  else if (event.keyCode == 109)
    createNewDiv()
  else if (event.keyCode == 8)
    write(-1) 
  else if (event.keyCode == 191)
    write('#')
  else if ((event.keyCode > 64 && event.keyCode < 91) || event.keyCode == 32)
    write(String.fromCharCode(event.keyCode))
}

function nextPhase() {
  if (body.getAttribute('class') == 'body2')
    return
  newPhase = true
  body.setAttribute('class', 'body2')
  for (let i = 2; i < body.children.length; i++)
    body.children[i].innerHTML = ''
}

function createNewDiv() {
  newDiv  = document.createElement('div')
  newDiv.style.margin = "0px"
  newDiv.style.padding = "0px"
  newDiv.style.position = 'absolute'
  newDiv.style.left = `${mouseX - 20}px`
  newDiv.style.top  = `${mouseY - 25}px`
  newDiv.style.background = newPhase ? 'rgba(0, 0, 0, 0.35)' : ''

  newP    = document.createElement('p')
  newP.innerHTML = ''
  newP.style = "margin: 5px; padding: 0px"
  newDiv.appendChild(newP)

  document.body.appendChild(newDiv)
}

function write(sign) { 
  if (document.body.children.length < 3)
    return
  
  let currP = document.body.children[document.body.children.length -1].children[0]
  
  if (sign == -1) 
    currP.innerHTML = String(currP.innerHTML).slice(0, -1)

  else
    currP.innerHTML += sign
}