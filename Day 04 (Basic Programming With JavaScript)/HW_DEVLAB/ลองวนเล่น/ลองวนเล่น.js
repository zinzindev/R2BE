/*
ทุกการเรียนรู้มักเกิดจากการลอง ดังนั้นแล้วในวันนี้ที่แสนสดใส เด็กชายเอได้ตื่นขึ้นมาในตอนเช้าพร้อมกับทานนมก่อนไปโรงเรียน แม้ว่าวันนี้จะเป็นเช้าวันอาทิตย์ แต่เขาก็ต้องตื่นไปเรียนในทุก ๆ วัน และ จะกลับถึงบ้านในเวลา 22 นาฬิกาของทุกวันเนื่องจากไปเรียนพิเศษเสร็จ

... แต่นั่นก็ไม่ได้เกี่ยวอะไรกับโจทย์เลย โจทย์ต้องการเพียงว่า ให้ผู้ใช้งานกรอกตัวเลขเป็นจำนวนครั้งที่จะแสดงข้อความว่า A ออกมาบนหน้าจอเท่านั้นเอง ให้เราพัฒนาโปรแกรมดังกล่าว โดยดูตัวอย่างได้จากกรณีทดสอบด้านล่าง
*/

//Output Example
// console.log("Hello borntoDev Lab")

//Input Example
// var rl = require('readline').createInterface(process.stdin);
// var inputList = [];

// rl.on('line', (line) => {
// 	inputList.push(line);
// }).on('close', () => {
// 	//Code Here
// 	// console.log("input:", inputList.join(""))

	// const rows = inputList[0];
	const rows = prompt('Enter number:');

	const printA = (rows) => {
		let textA = '';
		let i = 0;

		while (i < rows) {
			textA += 'A\n';
			i++;
		}

		return textA;
	};

	console.log(printA(rows));
	alert(printA(rows));
// });

//Tips:  Run for check input format

// https://www.borntodev.com/devlab/api/tasks/23/share?sharer=68419&passed=0