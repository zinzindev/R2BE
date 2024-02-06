/*
จงสร้างพีระมิดในรูปแบบง่ายๆดังนี้
input: 4
output: *
        **
        ***
        ****
*/

//Output Example
// console.log("Hello borntoDev Lab")

//Input Example
// var rl = require('readline').createInterface(process.stdin);
// var inputList = [];

// rl.on('line', (line) => {
// 	inputList.push(line);
// }).on('close', () => {
	//Code Here
	// console.log("input:", inputList.join(""))

	// let rows = inputList[0];
  let rows = prompt('Enter row of pyramid:')

	const pyramid = (rows) => {
		let star = '';

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j <= i; j++) {
				star += '*';
			}
			star += '\n';
		}

		return star;
	};

	console.log(pyramid(rows));
	alert(pyramid(rows));
// });

//Tips:  Run for check input format

// https://smhatre59.medium.com/react30-project27-building-a-home-decor-website-with-material-ui-in-react-b8b008b5af1b