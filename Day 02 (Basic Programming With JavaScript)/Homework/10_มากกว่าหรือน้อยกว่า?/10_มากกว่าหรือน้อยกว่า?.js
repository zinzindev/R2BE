/*
โรงเรียนของเด็กชายเอ ได้ทำการเปิดเรียนวันแรกในชั้นระดับอนุบาล 1 ได้เริ่มต้นบทเรียนการเปรียบเทียบตัวเลขว่าตัวเลขใดที่มีค่ามากกว่ากัน โดยให้เราพัฒนาโปรแกรมที่เป็นสื่อการสอนสำหรับห้องเรียนอนุบาล 1 / 2 ของโรงเรียนดังกล่าว โดยจะให้ผู้ใช้งานกรอกตัวเลขทั้งหมด 2 ตัวที่เป็นจำนวนเต็ม แล้วเปรียบเทียบว่า ตัวใดมากกว่ากัน
*/

//Get input example
var rl = require("readline").createInterface(process.stdin);
var inputList = [];
rl.on("line", (line) => {inputList.push(line);}).on("close", () => onInput(inputList));

//Code in here
function onInput(inputs) {
  // console.log("input:", inputs.join(','))
  const a = +inputs[0];
  const b = +inputs[1];

  a > b
    ? console.log(`MAX : ${a} \nMIN : ${b}`)
    : console.log(`MAX : ${b}  \nMIN : ${a}`);
}

//Tips:  Run for check input format

// ref: https://school.borntodev.com/course/road-to-back-end-developer-bootcamp/d9dda74e-92fc-4b62-87d8-d20e9387387f/devlab/8db37650-fb91-43ac-b9f8-997ce0afa45c