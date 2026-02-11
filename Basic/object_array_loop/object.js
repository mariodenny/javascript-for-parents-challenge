console.log("=== OBJECT ===");
// create the object
const car = {
    brand : "Aston Martin",
    type : "Vulcan 17",
    year : 2017,
    model : "Sport Car"
}

console.log(`Object of car : ${car}`) // in console log you will see Object of car : [object Object]
// to access the object use dot notation the formula is objectName.key
console.log(`The brand of the car is ${car.brand}`)
// to update the object properties 
console.log(`The type of the car is ${car.type}`)
car.type = "VULCAN 17"
console.log(`The type of the car is ${car.type}`)
// to add new properties to object just type the objectName.newkeyname
car.nationality = "United Kingdom"
console.log(`The car is come from ${car.nationality}`)
// delete properties in object using delete keyword
delete car.year
console.log(`The car was made in ${car.year}`)

