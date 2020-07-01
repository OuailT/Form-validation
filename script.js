const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



//Show error input message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
	
}

//Show success outline
function showSuccess(input) {
	const formControl =input.parentElement;
	formControl.className = "form-control success";
}

//Email Valid
function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (re.test(input.value.trim())) {
   	showSuccess(input)
   } else {
   	showError(input, 'Email is not Valid');
   }
}


function checkRequired(inputArr) {
	inputArr.forEach(function(input){
		if(input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is requierd`);
		} else {
			showSuccess(input);
		}
	}); 
}


	function checkLength (input, min, max) {
		if(input.value.length < min) {
			showError(
				input,
				`${getFieldName(input)} must be at Least ${min} Characters `);
		} else if (input.value.length > max ) {
			showError(
				input,
			  `${getFieldName(input)} must be between ${min} and ${max}`);
		}else{
			showSuccess(input);
		} 

	}


//get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Check Password Match
function passwordsMatch(input1,input2) {
	if(input1.value.trim() !== input2.value.trim() ){
		showError(input2, 'Password do not Matching');
	}
}


//Event Listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();


	checkRequired([username, email, password, password2]);
	passwordsMatch(password, password2);
	checkLength(username, 3, 15);
	checkLength(password, 6, 20);
	checkEmail(email);

});












