/*
คำอธิบาย: ให้ทำการวาดรูปสี่เหลี่ยมจัตุรัสโดยยรับค่าความกว้าง n โดยกรอบมีขนาด 1 ตัวอักษร

รูปเเบบ Input: บรรทัดแรก ค่า n เป็นความกว้างและยาวของสี่เหลี่ยม

รูปเเบบ Output: แสดงกรอบสี่เหลี่ยมที่มีความกว้างและยาวตามจำนวนที่รับเข้ามา
*/

//Output Example
// console.log("Hello borntoDev Lab")

//Input Example
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

//Code Here
// console.log("input:", inputList.join(""))

// const n = inputList[0];
const n = prompt('Enter size:');

const drawHollowSquare = (n) => {
	let sharps = '';

	for (let row = 0; row < n; row++) {
		for (let column = 0; column < n; column++) {
			if (row === 0 || row === n - 1 || column === 0 || column === n - 1) {
				sharps += '#';
			} else {
				sharps += ' ';
			}
		}
		sharps += '\n';
	}

	return sharps;
};

console.log(drawHollowSquare(n));
alert(drawHollowSquare(n));
// });

//Tips:  Run for check input format


//Link: https://www.borntodev.com/devlab/api/tasks/213/share?sharer=68419&passed=0