//when the page has loaded
function askQuestions(){

	var firstName = prompt('what is your firstName');
	var lastName = prompt('what is your lastName');

	var fullName = firstName + ' ' + lastName;

	$('h2').text ('Hello ' +fullName);

	var age = prompt ('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('Welcome, adult!');
	} else if (age >=13) {
		console.log('Come back in a few years.');
	} else {
		console.log ('Go away child!');
	}


	if (firstName.toLowerCase()=== 'general' && lastName.toLowerCase()!== 'assembly'){ 
		console.log('Welcome, General ' + lastName + '!');
	}

	var faveColour = prompt('what is your favourite colour').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green' || 
	faveColour == 'blue' ||
	faveColour == 'yellow') {
	$('h1').css('color', faveColour);
	}
}
















$(function() {

	$('img').on('click',askQuestions);
	
	//hide all the content
	$('h3').next().hide();

	//when the user clicks an H3
	$('h3').on('click', function() {

		//Toggle the next element
		$(this).next().slideToggle(1000);



	});


});