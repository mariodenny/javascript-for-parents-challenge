console.log("If else if else");
// take the dom globally
let timeInput = document.getElementById("timeInput") // this is for time input component
let resultComponent = document.getElementById("result") // this is for result that using h3 with id result
function sayTimes() {
    // take the value from timeInput
    time = Number(timeInput.value) // convert to number first
    console.log(`Time value : ${time}`)
    if (time >= 1 && time <= 10) {
        resultComponent.textContent = "Good Morning!"
    } else if (time >= 11 && time <= 17) {
        resultComponent.textContent = "Good Afternoon!"
    } else if (time >= 18 && time <= 24) {
        resultComponent.textContent = "Good Night!"
    } else {
        resultComponent.textContent = "Umm , Hello ?"
    }
}
console.log("Switch case");

// next case we gonna use switch to switch beetwen if the age is appropriate to watch the movie
// take the dom
let ageInput = document.getElementById("ageInput")
console.log(`Age input ${ageInput}`);
let ageResult = document.getElementById("ageResult")

function checkAge() {
    const age = Number(ageInput.value)

    if (Number.isNaN(age)) {
        ageResult.textContent = "Please input a valid age"
        return
    }

    if (age < 15) {
        ageResult.textContent =
            `You're ${age}. You are NOT eligible to watch this movie alone. Please watch it with your parents.`
    } else if (age < 18) {
        ageResult.textContent =
            `You're ${age}. You can watch this movie, but make sure to bring a parent or an adult.`
    } else {
        ageResult.textContent =
            `You're ${age}. You are eligible to watch this movie.`
    }
}