"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var fs_1 = require("fs");
var io = function () {
    inquirer_1["default"].prompt([
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
        .then(function (data) {
        var filename = data.name.toLowerCase().split(' ').join('') + '.json';
        fs_1["default"].writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
            return err ? console.log(err) : console.log('SUCCESS');
        });
    });
};
io();
