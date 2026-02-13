const cars = ["Volvo", "Citroen", "BMW", "Aston Martin", "Ferrari"]
const forofComponent = document.getElementById("forOf")
// for of
let result = ""
for (let car of cars) {
    result += `${car},`
}

forofComponent.textContent = result
// for unpacking array

// map() -> is used to transfor array into something new for sample into object for easiest use
const newCars = cars.map(car => ({
    brand : car
}))
console.log(newCars) // now each brand is own a key of brand:car
console.log(newCars.brand) // it turn into object


// forEach () -> king of front end well said this is my favorite loop tbh
// using forEach() -> it execute the new function inside a forEach()
function sayBrand(car){
    console.log(`Brand of the car is ${car}`)
}
cars.forEach(car => {
    sayBrand(car)
})

