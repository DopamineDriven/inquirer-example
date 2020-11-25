import inquirer from "inquirer";
import * as fs from "fs";
const io = () => {
	inquirer.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'what is your name?'
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
				choices: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
			}
		])
		.then((data: any) => {
			const filename = data.name.toLowerCase().split(' ').join('') + '.json';

			fs.writeFile(
				filename,
				JSON.stringify(data, null, '\t'),
				(err: NodeJS.ErrnoException | null) => {
					return err ?? console.log("SUCCESS");
				}
			)
		})
}

io();