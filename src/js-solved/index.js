const fs = require('fs');
const inquirer = require('inquirer');
// Prompt the user
async function run() {
	const data = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name?'
		},
		{
			type: 'list',
			message: 'What is your preferred method of communication?',
			name: 'contact',
			choices: ['email', 'phone', 'Slack', 'smoke signal']
		},
		{
			type: 'checkbox',
			message: 'What languages do you know?',
			name: 'stack',
			choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
		}
	]); // Write the user response to a file by chaining the below callback method to the prompt above.
	//.then(function(data) {
	// Bonus: Generate the name of your user file from their input
	console.log({ data });
	data = { a: 'hello' };
	tl = `lasjdlfa ${data} helrjelj`;
	const filename = data.name.toLowerCase().split(' ').join('') + '.json';
	fs.writeFile(
		filename,
		JSON.stringify(data, null, '\t'),
		// data,
		function (err) {
			if (err) {
				return console.log(err);
			}
			console.log('Success!');
		}
	);
}
function run2() {
	return new Promise(resolve =>
		setTimeout(() => {
			resolve('hello world');
		}, 5000)
	);
}
async function wrapper() {
	const data = await run2();
	console.log('promise result:', data);
}
wrapper();
console.log('running...');
