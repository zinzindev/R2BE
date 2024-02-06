const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const students = [];

app.use(bodyParser.json());

app.post('/students', (req, res) => {
	students.push(req.body);
	res.json(students);
});

app.get('/students', (req, res) => {
	res.json(students);
});

app.get('/students/:id', (req, res) => {
	const stId = +req.params.id;
	const student = students.find((s) => s.id === stId);
	res.json(student);
});

app.put('/students/:id', (req, res) => {
	const stId = Number(req.params.id);
	const student = req.body;
	const index = students.findIndex((s) => s.id === stId);
	students[index] = student;
	res.json(student);
});

app.delete('/students/:id', (req, res) => {
	const stId = Number(req.params.id);
	const index = students.findIndex((s) => s.id === stId);
	students.splice(index, 1);
	res.json(students);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
