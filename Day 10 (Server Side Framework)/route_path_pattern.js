const express = require('express');
const app = express();
const port = 3000;

app.get('/ab?cd', (req, res) => {
	// 'acd', 'abcd'
	res.send('ab?cd');
});

app.get('/ab+cd', (req, res) => {
	// 'abcd', 'abbcd', 'abbbcd'
	res.send('ab+cd');
});

app.get('/ab*cd', (req, res) => {
	//  'abcd', 'abxcd', 'abRANDOMcd', 'ab123cd'
	res.send('ab*cd');
});

app.get('/ab(cd)?e', (req, res) => {
	//  /abe, /abcde
	res.send('ab(cd)?e');
});

app.get(/a/, (req, res) => {
	// any a inseide
	res.send('/a/');
});

app.get(/.*fly$/, (req, res) => {
	// any fly end of line
	res.send('/.*fly$/');
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
