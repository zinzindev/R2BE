# ตัวอย่างการใช้งาน Express-GraphQL
โปรเจกต์นี้เป็นโปรเจกต์ที่ใช้ Express และ GraphQL ในการสร้าง API ที่สามารถใช้งานได้ง่ายและมีประสิทธิภาพ

## การติดตั้ง

ให้รันคำสั่ง `npm install` เพื่อติดตั้ง dependencies ที่จำเป็น

## การใช้งาน

เมื่อติดตั้งเสร็จสิ้น คุณสามารถรัน server ด้วยคำสั่ง node server.js แล้วเปิดเบราว์เซอร์ไปที่ http://localhost:4000/api คุณจะเห็นหน้าต่าง GraphQL สามารถทดสอบ API ได้

ในตอนนี้ API มีเพียง query เดียวคือ hello ซึ่งจะตอบกลับ "Hello world!"

## การพัฒนาต่อ
คุณสามารถเพิ่ม fields และ resolvers ใน QueryRoot ในไฟล์ server.js เของ API 

โดยส่วนประกอบที่สำหรับใน GraphQL มีดังนี้
- Schema: กำหนดโครงสร้างของ API และประเภทข้อมูลที่สามารถใช้ได้
- Query: ใช้สำหรับการอ่านข้อมูลจาก API
- Mutation: ใช้สำหรับการเขียนหรือแก้ไขข้อมูลใน API
- Resolver: ใช้สำหรับการดำเนินการตามคำสั่งใน Query หรือ Mutation และคืนค่าผลลัพธ์กลับไปยังผู้ใช้

