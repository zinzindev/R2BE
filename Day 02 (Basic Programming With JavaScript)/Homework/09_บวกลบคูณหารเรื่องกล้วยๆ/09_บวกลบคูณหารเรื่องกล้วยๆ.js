/*
แม้ว่าโปรแกรมในการบวก ลบ คูณ และ หารเลขจะเป็นเรื่องธรรมดา แต่ถ้าลองรับค่าตัวเลขมา 2 ตัวแล้วทำการ บวกลบคูณหารทั้งหมดในโปรแกรมเดียวหละ ? ให้ลองพัฒนาโปรแกรมดังกล่าวดูเพื่อทดสอบความสามารถกันเลย !
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

  console.log(`${a} + ${b} = ${a+b}`);
  console.log(`${a} - ${b} = ${a-b}`);
  console.log(`${a} * ${b} = ${a*b}`);
  console.log(`${a} / ${b} = ${a/b}`);

}

//Tips:  Run for check input format

// ref: https://school.borntodev.com/course/road-to-back-end-developer-bootcamp/d9dda74e-92fc-4b62-87d8-d20e9387387f/devlab/ad56a5eb-fdb1-4fcd-89a1-ebc018e7c18e