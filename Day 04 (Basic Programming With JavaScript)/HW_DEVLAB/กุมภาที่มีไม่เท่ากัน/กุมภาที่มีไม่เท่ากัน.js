/*
เราทุกคนมักทราบดีว่าเดือนดังกล่าวมีจำนวนวันที่ไม่เท่ากันในบางปี เช่น 28 วันบ้าง หรือ 29 วันบ้าง โดยเราทราบกันดีอยู่แล้วว่าทุก ๆ 4 ปี (หรือปีที่หารเอาเศษด้วย 4 ลงตัวใน ปีแบบ ค.ศ.) เดือนดังกล่าวจะมีวันที่แปลกออกไป ซึ่งเรียกว่า "ปีอธิกสุรทิน" แต่ก็แน่นอนว่า เอาจริง ๆ แล้วกฏเกณฑ์นี้ก็ไม่ได้ถูกเสมอไปว่าจะเป็นเช่นนั้น เพราะ ทุก ๆ ครั้งที่ปี ค.ศ. ดังกล่าวหารด้วย 100 ลงตัวก็ไม่ใช่ปีอธิกสุรทิน เช่นกัน และ ยังมีข้อยกเว้นเพิ่มเติมบางประการอีกด้วยว่า ปีดังกล่าวใช่ปี อธิกสุรทินหรือไม่

เพื่อความกระจ่างแจ้งแล้วเราจะต้องพัฒนาโปรแกรมดังกล่าวเพื่อฝึกทักษะในการพัฒนาโปรแกรม และ การคิดค้นทางการแก้ไขปัญหาดังกล่าว โดยจะให้รับค่าเข้าไปเป็นปี (ค.ศ.) และ ให้แสดงผลออกมาทางหน้าจอว่าปีดังกล่าวเป็นปีอธิกสุรทินหรือไม่ ถ้าใช่ให้แสดงว่า "Leap Year" แต่ถ้าหากไม่ใช่ก็ให้แสดงว่า "Not a Leap Year" โดยให้เราพัฒนาโปรแกรมดังกล่าว โดยดูตัวอย่างได้จากกรณีทดสอบด้านล่าง
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

  // const year = inputList[0];
  const year = prompt('Enter year:');

  const leapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? 'Leap Year'
      : 'Not a Leap Year'
    );
  }

  console.log(leapYear(year));
  alert(leapYear(year));

// });

//Tips:  Run for check input format

// https://smhatre59.medium.com/react30-project27-building-a-home-decor-website-with-material-ui-in-react-b8b008b5af1b