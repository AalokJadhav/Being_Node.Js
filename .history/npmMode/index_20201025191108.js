const chalk = require('chalk');

console.log(chalk.blue.underline.inverse('Hello world..!'));

console.log(chalk.green.underline.inverse('Success'));

console.log(chalk.red.underline.inverse('False'));



var validator = require('validator');
 
validator.isEmail('foo@bar.com'); //=> true