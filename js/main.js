function askQuestions(){
//$ always indicates the start of a JQuery
//if you have an underline in your brackets it's a good way to tell you've got the brackets in the right location and none are crossed
//the console tab in your developer tools can be used to check your code is correct and it helpfully points out specifically where and what errors there migh be
//JQuery is a library of code written in Javascript. It's basically pre-written code which can be used to avoid repeating ourselves across different platforms i.e. ios or mobile
//learn.jquery.com is a great place for resource lists for all different functions and events jquery can do
//font resources: linotype.com or dafont.com or font squirell or google.com/font. use the generator function in font squirrel to convert your font to the right version for other platforms
//to use google.com/font, click on quick use button and copy required code 
//== is for comparing values, whilst just one = is for assigning values, === for value and type
var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName //you need to put the apostrophe to include a space between first and last names otherwise the name will be merged together
console.log(fullName);

var age = prompt('How old are you>');
age = parseInt(age);

if (age>= 18) {
	console.log('User is an adult');
} else if (age >= 13) {
	console.log('User is a teenager');
} else {
	console.log('User is a child');
}

$('h2').text(firstName + 'is' + age + 'years old!');

if (firstName == 'General' && lastName!== 'Assembly') {
	console.log('Welcome, you have been authenticated');
}

var favecolour = prompt('What is your favourite colour?').toLowerCase();

if (favecolour === 'red'||
	favecolour === 'blue'||
	favecolour === 'green'||
	favecolour === 'yellow') {

	$('h1').css('color', favecolour);
}

}


// When the page loads
$(function() {

	$('img').on('click', askQuestions);

	// When the user clicks a heading
	$('h3').on('click', function() {

		// Hide the content after the heading
		$(this).next().slideToggle(5000);

	});
	
});