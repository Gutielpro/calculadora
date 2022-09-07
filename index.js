const btns = document.querySelectorAll('.btn')
const arrayBtns = Array.from(btns)
const screen = document.getElementById('screen')
let result = 0
let firstValue = ''
let operation = ''
let secondValue = ''

for (let i = 0; i < btns.length; i++) {
  const element = btns[i]
  element.addEventListener('click', function (e) {
    const num = e.target.innerText
    if (!isNaN(num) && !operation) {
      /*   screen.value = screen.value + e.target.innerText */
      firstValue = firstValue + e.target.innerText
      screen.value = firstValue
    } else if (!isNaN(num)) {
      secondValue = secondValue + e.target.innerText
      screen.value = secondValue
      console.log(secondValue)
    }

    if (e.target.id === 'btnSumar') {
      operation = 'suma'
    }

    if (e.target.id === 'btnResta') {
      operation = 'resta'
    }

    if (e.target.id === 'btnx') {
      operation = 'multiplicacion'
    }

    if (e.target.id === 'btn/') {
      operation = 'division'
    }

    if (e.target.id === 'btnIgual' && operation === 'suma') {
      suma(firstValue, secondValue)
      screen.value = result
    }

    if (e.target.id === 'btnIgual' && operation === 'resta') {
      resta(firstValue, secondValue)
      screen.value = result
    }

    if (e.target.id === 'btnIgual' && operation === 'multiplicacion') {
      multiplicacion(firstValue, secondValue)
      screen.value = result
    }

    if (e.target.id === 'btnIgual' && operation === 'division') {
      division(firstValue, secondValue)
      screen.value = result
    }

    if (e.target.id === 'btnReset') {
      screen.value = ''
    }
  })
}

const resta = (num1, num2) => {
  result = Number(num1) - Number(num2)
}

const suma = (num1, num2) => {
  result = Number(num1) + Number(num2)
}

const multiplicacion = (num1, num2) => {
  result = Number(num1) * Number(num2)
}

const division = (num1, num2) => {
  result = Number(num1) / Number(num2)
}

const reset = document.getElementById('reset')
