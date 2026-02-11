// take the dom globally 
let sportInput = document.getElementById("sport")
let sportResult = document.getElementById("sportResult")
function checkBenefit(){
    // because the function need to get value everytime, thats why we put it inside function
    let sport = sportInput.value
    switch(sport.toLowerCase()){
        case "badminton":
            sportResult.textContent = "Badminton provides a comprehensive, high-intensity workout, burning roughly 450-500 calories per hour while enhancing cardiovascular health, agility, and muscle strength. It strengthens muscles (legs, core, arms), improves reflexes, and increases bone density. Mentally, it boosts concentration and reduces stress, contributing to improved overall, long-term health."
            break
        case "swimming":
            sportResult.textContent = "Swimming is a premier, low-impact, full-body workout that strengthens the heart and lungs, tones muscles, and boosts endurance without stressing joints. Suitable for all ages, it burns significant calories, aids weight management, reduces stress, and may lower the risk of cardiovascular disease by 41%"
            break
        case "volleyball":
            sportResult.textContent = "Volleyball offers comprehensive health benefits by combining intense cardiovascular workouts with strength training, burning up to 585 calories in 45 minutes. It improves agility, reflexes, and hand-eye coordination through rapid, explosive movements. Additionally, it boosts mental health by reducing stress and fostering team camaraderie. "
            break
        default:
            sportResult.textContent = "Any sport is really help you healthy and grow :)"
            break
    }  
}