const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRouter = require('./routes/products_routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productsRouter);

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}/api/products`);
});
