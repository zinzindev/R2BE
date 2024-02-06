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

const rows = 3;

// ## Solution1 ##
/*
	const pyramid = (rows) => {
		let str = '';

		for (let i = 0; i < rows; i++) {
			// Add space
			for (let j = 0; j < rows - i - 1; j++) {
				str += '-';
			}
			// Add star
			for (let k = 0; k <= 2 * i; k++) {
				str += '*';
			}
			str += '\n';
		}

		return str;
	};
	*/

// ## Solution2 ##
const pyramid = (rows) => {
	let star = '';

	for (let i = 0; i < rows; i++) {
		star += '-'.repeat(rows - i -1);
		star += '*'.repeat(2 * i +1);
		star += '\n';
	}

	return star;
};

console.log(pyramid(rows));
alert(pyramid(rows));

// });

//Tips:  Run for check input format

// https://smhatre59.medium.com/react30-project27-building-a-home-decor-website-with-material-ui-in-react-b8b008b5af1b