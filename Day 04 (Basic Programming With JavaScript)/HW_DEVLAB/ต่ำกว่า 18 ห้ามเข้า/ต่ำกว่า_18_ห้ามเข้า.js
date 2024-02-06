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

	// const customerName = inputList[0];
	// const customerBirthYear = inputList[1];
	const customerName = prompt('Enter customer name')
	const customerBirthYear = prompt('Enter customer birth year')
	const currentYear = 2021;

	const ageOfPass = (customerName, customerBirthYear) => {
		if (customerName !== 'A A') {
			return currentYear - +customerBirthYear > 18
				? `Welcome ${customerName} to NongGipsy Pub`
				: `You shall not pass!`;
		}

		return `Welcome ${customerName} to NongGipsy Pub`;
	};

	console.log(ageOfPass(customerName, customerBirthYear));
	alert(ageOfPass(customerName, customerBirthYear))
// });

//Tips:  Run for check input format

// https://smhatre59.medium.com/react30-project27-building-a-home-decor-website-with-material-ui-in-react-b8b008b5af1b
