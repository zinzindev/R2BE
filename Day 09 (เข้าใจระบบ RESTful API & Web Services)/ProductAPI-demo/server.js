const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '@DataScience202833',
	database: 'inventory',
});

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

// add product

// get product

// get all products

//update product

//delete product

app.listen(3000, () => {
	console.log('Example app listening on port 3000');
});
