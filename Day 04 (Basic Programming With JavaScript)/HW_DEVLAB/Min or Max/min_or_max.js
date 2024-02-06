/*
จงรับเลขจำนวนเต็ม มาทั้งหมดสองจำนวนเพื่อหาว่าจำนวนไหนมากกว่ากัน และ แสดงเป็นชื่อตัวแปรนั้นๆ ถ้ามีค่าเท่ากันให้แสดงเป็น "AB" บรรทัดแรกที่รับค่าคือตัวแปร A บรรทัดที่สองที่รับค่าคือตัวแปร B
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

  // console.log(typeof a);

  const a = prompt("Enter Int Number of a")
  const b = prompt("Enter Int Number of b")

  const findMax = (a, b) => {
    if (parseInt(a) > parseInt(b)) return 'A';
    else if (parseInt(b) > parseInt(a)) return 'B';
    else return 'AB';
  }

  console.log(findMax(a, b));
  alert(findMax(a, b));
// });

//Tips:  Run for check input format

// https://smhatre59.medium.com/react30-project27-building-a-home-decor-website-with-material-ui-in-react-b8b008b5af1b