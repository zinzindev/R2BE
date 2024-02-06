/*
คำอธิบาย
รับ input เป็นตัวเลขจำนวนเต็ม a และ b จากนั้นให้ output ผลรวมของตัวเลขทั้ง 2 จำนวนออกทางจอภาพ บรรทัดแรก จำนวนเต็ม a โดยที่ 0 <= a <= 10^9 บรรทัดที่สอง จำนวนเต็ม b โดยที่ 0 <= b <= 10^9

Input: 4
			 5

Output: 9
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
// const a = inputList[0];
// const b = inputList[1];
const a = prompt('Enter integer number a:');
const b = prompt('Enter integer number b:');

const pulseInt = (a, b) => parseInt(a) + parseInt(b);

console.log(pulseInt(a, b));
// });

//Tips:  Run for check input format

// https://www.borntodev.com/devlab/api/tasks/6/share?sharer=68419&passed=0
