/*
โดยการคำนวณเกรดนั้นจะมีการให้คะแนนตามเกรดแต่ละช่วงเป็น 80- 100 ได้เกรด A , 70 - 79 ได้เกรด B , 60 - 69 ได้เกรด C , 50 - 59 ได้เกรด D และ ต่ำกว่า 50 จะได้เกรด F โดยผู้ใช้จะต้องกรอกเป็นตัวเลขจำนวนเต็มเท่านั้น
*/

//Get input example
var rl = require('readline').createInterface(process.stdin);
var inputList = [];
rl.on('line', (line) => {
	inputList.push(line);
}).on('close', () => onInput(inputList));

//Code in here
function onInput(inputs) {
	// console.log("input:", inputs.join(','))
	let grade;

	switch (true) {
		case inputs >= 80:
			grade = 'A';
			break;
		case inputs >= 70:
			grade = 'B';
			break;
		case inputs >= 60:
			grade = 'C';
			break;
		case inputs >= 50:
			grade = 'D';
			break;
		default:
			grade = 'F';
	}
	// return grade;
	console.log(grade);
}

//Tips:  Run for check input format

// ref: https://school.borntodev.com/course/road-to-back-end-developer-bootcamp/d9dda74e-92fc-4b62-87d8-d20e9387387f/devlab/363d379f-165e-4285-bfe5-25ead617808b
