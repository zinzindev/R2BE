const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 }); // สร้าง webScket server ที่ port 8080

let clientId = 1; // กำหนดตัวแปรเก็บหมายเลขระบุตัวตนของ Client

wss.on('connection', (ws) => {
	// เมื่อมี client เชื่อมต่อเข้ามา
	const currentClientId = clientId++; // เก็บต่าลำดับระบุตัวตนของ client และเพื่มค่าตัวแปร clientId ท

	ws.on('message', (message) => {
		// เมื่อมีข้อตวามส่งมาจาก client
		console.log(`Client ${currentClientId} - Received: ${message}`);

		wss.clients.forEach((client) => {
			// ส่งข้อความถึง client ทุกตัว
			if (client.readyState === WebSocket.OPEN) {
				// ตรวจสอบสถานะ client พร้อมรับข้อมูลหรือไม่
				client.send(`Client ${currentClientId} - ${message}`); // ส่ง message + id ไปยัง client
			}
		});
	});

	ws.send(`Hello! I am a WebSocket server. You are Client ${currentClientId}`); // ส่งข้อความไปยัง client ที่เชื่อมต่อ

	console.log(`Client ${currentClientId} connected`);
});

wss.on('listening', () => {
	console.log('WebSocket server is running on port 8080');
});
