/*
ต่อมาหลังจากรู้ได้ว่าเราสามารถทำโปรแกรมได้ เด็กหญิงสมจริงดีใจสุดๆ พร้อมทั้งอยากให้เราทำอีกรูปหนึ่งซึ่งเด็กน้อยคนนี้สนใจไม่แพ้กันนั่นก็คือ "พีระมิด" เนื่องจากลุงสมหมายชอบเปิดวีดีโอสารคดีให้ดูบ่อยๆ ดังนั้นถึงแม้ว่าเราจะไม่อยากทำก็ตาม แต่สายตาของเด็กน้อยที่จ้องมาที่เรา ก็จะต้องทำให้เรายอมสร้า
งโปรแกรมขึ้นมาอีกตัวหนึ่งเพื่อให้เด็กหญิงคนนี้นั่นเอง (ข้อนี้ไม่มีการรับ input)

Output:
    $
   $ $
  $ $ $
 $ $ $ $
$ $ $ $ $
*/

function pyramid(rows) {
	let str = '';

	for (let i = 1; i <= rows; i++) {
		for (let k = 1; k <= rows - i; k++) {
			str += ' ';
		}
		for (let j = 1; j <= i; j++) {
			str += '$ ';
		}
		str += '\n';
	}
	console.log(str);
}

pyramid(5);

/*
ref -> https://www.youtube.com/watch?v=ItOmYp9AKOA

Dev Lab -> https://school.borntodev.com/course/road-to-back-end-developer-bootcamp/d9dda74e-92fc-4b62-87d8-d20e9387387f/devlab/59397815-8038-4afb-8c79-b3030b9b22e2
*/

