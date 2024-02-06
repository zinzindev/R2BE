const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Server listening on http://127.0.0.1:${port}`);
});
