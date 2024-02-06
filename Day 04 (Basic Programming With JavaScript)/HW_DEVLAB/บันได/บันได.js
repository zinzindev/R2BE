/*
บันไดเป็นสิ่งที่เราพบเห็นได้ในชีวิตประจำวัน และ เป็นโจทย์ที่เราก็เคยทำกันไปแล้วทั้งนั้น

เนื่องจากว่าเรานั้นได้ไปรับงานจากบริษัทชื่อดังเรื่องการออกแบบรวมถึงรับเหมาก่อสร้างบ้าน
ที่เขามักจะให้ลูกค้าของเขานั้น สามารถใส่จำนวนขั้นบันไดได้เอง แล้วโปรแกรมจะทำการ

แสดงหน้าตาของบันไดที่ผู้ใช้งานได้กรอกตัวเลขลงไป (ที่เป็นจำนวนขั้น)
และแสดงออกมาผ่านทางหน้าจอ ให้เราพัฒนาโปรแกรมดังกล่าว
โดยดูตัวอย่างได้จากกรณีทดสอบด้านล่าง

Input:
3

Output:
*
**
***
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

	// const steps = inputList[0];
	const steps = prompt('Enter steps:');

	const stairs = (steps) => {
		let stars = '';

		for (let i = 0; i < steps; i++) {
			for (let j = 0; j <= i; j++) {
				stars += '*';
			}
			stars += '\n';
		}

		return stars;
	};

	console.log(stairs(steps));
	alert(stairs(steps));
// });

//Tips:  Run for check input format

// https://smhatre59.medium.com/react30-project27-building-a-home-decor-website-with-material-ui-in-react-b8b008b5af1b
