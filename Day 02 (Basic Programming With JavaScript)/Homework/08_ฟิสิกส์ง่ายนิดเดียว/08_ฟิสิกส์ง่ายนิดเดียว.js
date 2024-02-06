/*
เรื่องราวของวิชาฟิสิกส์ที่เรามักเจอกันในบทเรียนแรกๆ คือสูตร v=s/t
ซึ่งคือสูตรในการคำนวณหาระยะทางที่เคลื่อนที่ได้ ต่อ 1 หน่วยเวลา
v คืออัตราเร็วของการเคลื่อนที่ (m/s หรือ km/hr)
t คือเวลาที่วัตถุใช้เคลื่อนที่จริง (s หรือ hr)
เช่น ถ้าหากเราต้องการจะทราบว่ารถคันหนึ่งอัตราเร็วเท่าไหร่ เราก็นำระทางที่รถคันนั้นเคลื่อนที่ได้ (ซึ่งหน่วยอาจจะเป็นเมตร หรือ กิโลเมตรก็แล้วแต่) นำมาหารกับ เวลาที่เคลื่อนที่นั้นเอง เหมือนที่เราพบเห็นบ่อยๆ ที่เขามักพูดกันว่า 100 กิโลเมตรต่อชั่วโมง หรือ 120 กิโลเมตรต่อชั่วโมงทำนองนั้นเลย ! ให้เราพัฒนาโปรแกรมคำนวณหาค่าอัตราเร็ว โดยให้ผู้ใช้งาน
กรอกระยะทาง โดยมีค่าตั้งแต่ 1 ขึ้นไป (หน่วยเป็นกิโลเมตร แต่ไม่ต้องกรอกหน่วยนะ!)
กรอกเวลาที่เคลื่อนที่ โดยมีค่าตั้งแต่ 1 ขึ้นไป (หน่วยเป็นชั่วโมง แต่ไม่ต้องกรอกหน่วยนะ!)
พร้อมทั้งแสดงผลลัพธ์ออกมาบนหน้าจอตามตัวอย่างกรณีทดสอบด้านล่าง
*/

//Get input example
var rl = require("readline").createInterface(process.stdin);
var inputList = [];
rl.on("line", (line) => {inputList.push(line);}).on("close", () => onInput(inputList));

//Code in here
function onInput(inputs) {
  // console.log("input:", inputs.join(','))
  const s = inputs[0];
  const t = inputs[1];
  const v = s / t

  console.log(`${v} km/h`);
}

//Tips:  Run for check input format

// ref: https://school.borntodev.com/course/road-to-back-end-developer-bootcamp/d9dda74e-92fc-4b62-87d8-d20e9387387f/devlab/db42ea8f-47e3-4582-ac96-3ffb2024228d