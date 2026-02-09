let firstNumberInput = document.getElementById("firstNumber")
let secondNumberInput = document.getElementById("secondNumber")

// then take the result component
let resultComponent = document.getElementById("result")


// get value of each dom number input

function getValues() {
    const firstNumber = Number(firstNumberInput.value)
    const secondNumber = Number(secondNumberInput.value)

    return {
        firstNumber,
        secondNumber
    } // return as object -> its like putting those two numbers inside a box
}

function addition() {
    // now before we do some operator first we need to destructure the box to get each values -> in other word lets open the box
    const {
        firstNumber,
        secondNumber
    } = getValues() // this is how we destructured it
    resultComponent.textContent = `Result : ${firstNumber + secondNumber}`
}

function substraction() {
    const {
        firstNumber,
        secondNumber
    } = getValues()
    resultComponent.textContent = `Result : ${firstNumber - secondNumber}`
}

function division() {
    const {
        firstNumber,
        secondNumber
    } = getValues()

    resultComponent.textContent =
        secondNumber === 0 ?
        "Cannot divide by zero" :
        `Result : ${firstNumber / secondNumber}`
}

function times() {
    const {
        firstNumber,
        secondNumber
    } = getValues()
    resultComponent.textContent = `Result : ${firstNumber * secondNumber}`

}

function powers() {
    const {
        firstNumber,
        secondNumber
    } = getValues()
    resultComponent.textContent = `Result : ${firstNumber ** secondNumber}`
}