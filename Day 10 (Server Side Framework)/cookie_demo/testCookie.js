const express = require('express');
const cookieParser = require('cookie-parser');

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cookieParser());

// app.get('/', (req, res) => {
// 	res.send({ message: 'Welcome to Cookie World!' });
// });

// app.get('/setCookies', (req, res) => {
// 	res.cookie('userEmail', 'abc@gmail.com');
// 	res.send({ message: 'Cookie has been set!' });
// });

app.get('/setCookies', (req, res) => {
	res.cookie('userEmail', 'abc@gmail.com');
	res.cookie('userName', 'John D', { httpOnly: true, maxAge: 6000 });
	// res.cookie('userName', 'John D', { httpOnly: true });
	res.send({ message: 'Cookie has oebeen set!' });
});

app.get('/getCookies', (req, res) => {
	console.log(req.cookies);
	res.send(req.cookies);
});

app.listen(port, host, () => {
	console.log(`[ ready ] http://${host}:${port}`);
});
