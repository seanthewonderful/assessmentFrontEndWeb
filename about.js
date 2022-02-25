console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}
function complimentAlert(evt) {
	evt.preventDefault()
	alert("Nice job moving your mouse over the duck picture!")
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let ducky = document.querySelector("img")

ducky.addEventListener("mouseover", complimentAlert)

