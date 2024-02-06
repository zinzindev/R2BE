/*
จากคราวที่แล้วที่พัฒนาโปรแกรมแสดงข้อความต้อนรับได้สำเร็จจนทำให้ลุงสมหมายประทับใจมาก ! แต่ความต้องการในการพัฒนาร้านของเขานั้นไม่ได้จบเพียงเท่านี้ ลุงสมหมายอยากจะให้โปรแกรมต้อนรับของเขาสามารถใส่ชื่อลูกค้าได้ด้วย ! ให้เราลองพัฒนาโปรแกรมดังกล่าวโดยดูจากผลลัพธ์ดังตัวอย่างของกรณีทดสอบ

Ex1
Input: Somjit
Output: Welcome Somjit !
				Somjit 108 Eleven Shop

Ex2
Input: Somrak
Output: Welcome Somrak !
				Somjit 108 Eleven Shop

Ex3
Input:
Output: Welcome Somrak !
				Somjit 108 Eleven Shop
*/

/*
function greeting(name) {
	console.log(`Welcome ${name} !\nSommai 108 Eleven Shop`);
}

greeting('Sommai');
greeting('Somsak');
greeting('Kittikorn');
greeting(' ');
*/

//Get input example
var rl = require("readline").createInterface(process.stdin);
var inputList = [];
rl.on("line", (line) => {inputList.push(line);}).on("close", () => onInput(inputList));

//Code in here
function onInput(inputs) {
  console.log('Welcome', inputs.join(','), '!', '\nSommai 108 Eleven Shop')
}

//Tips:  Run for check input format

// Dev Lab -> https://school.borntodev.com/course/road-to-back-end-developer-bootcamp/d9dda74e-92fc-4b62-87d8-d20e9387387f/devlab/29490573-f5c7-4a09-b207-63b8aed4303e

