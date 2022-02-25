function getComp(evt) {
	evt.preventDefault()
	alert("You're doing great   -Sean")
}
let reassurance = document.querySelector("#thumb")

reassurance.addEventListener("click", getComp)

function myFavColor(evt) {
	evt.preventDefault()
	alert("Blue...no yello-AAAAAHHHHHHHHHH")
}
let favColor = document.querySelector("#color")

favColor.addEventListener("click", myFavColor)

function myFavPlace(evt) {
    evt.preventDefault()
    alert("Atop the Tower of Babylon")
}
let favPlace = document.querySelector("#place")

favPlace.addEventListener("click", myFavPlace)

function myFavRitual(evt) {
    evt.preventDefault()
    alert("I can only give you the second part my favorite ritual: 36 Holes of golf teeing off at 9:15am with Drew. The rest is restricted access.")
}
let favRitual = document.querySelector("#ritual")

favRitual.addEventListener("click", myFavRitual)