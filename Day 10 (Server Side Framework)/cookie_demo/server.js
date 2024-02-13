// const express = require('express');
// const app = express();

const app = require('express')();

app.get('/', (req, res) => {
	res.setHeader('set-cookie', ['setfromserver=1', 'jsCantSeeThis=1; httponly']);
	res.sendFile(`${__dirname}/index.html`);
});

app.get('/img', (req, res) => {
	res.setHeader('set-cookie', ['imtrackingyou=1']);
	res.sendFile(`${__dirname}/cookies.png`);
});

app.get('/path1', (req, res) => {
	res.send(`Path1: I have been send these cookies: ${req.headers.cookie}`);
});

app.get('/path2', (req, res) => {
	res.send(`Path2: I have been send these cookies: ${req.headers.cookie}`);
});

app.get('/steal', (req, res) => {
	res.send(
		`Hey I store your cookies... i saved them in my database as well here are they ${req.query.v}`
	);
});

app.listen(8080, () => console.log('listening on port 8080'));
