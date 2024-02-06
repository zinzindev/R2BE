'use server';

import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '@DataScience202833',
	database: 'customers',
	port: 3306,
});

export async function submitForm(fromData) {
	// id custome email
	const id = fromData.get('id');
	const name = fromData.get('name');
	const email = fromData.get('email');

	console.log('id: ', id);
	console.log('name: ', name);
	console.log('email: ', email);

	const sql = 'INSERT INTO customers (id, name, email) VALUES (?, ?, ?)';
	const values = [id, name, email];

	connection.query(sql, values, (err, result) => {
		if (err) {
			return console.error(err.message);
		}
		console.log('Rows affected:', result.affectedRows);
	});
}
