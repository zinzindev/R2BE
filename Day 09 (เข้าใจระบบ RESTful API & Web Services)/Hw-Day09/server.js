// https://school.borntodev.com/course/road-to-back-end-developer-bootcamp/b90c9e28-4415-4716-bb4b-126a5a2c0c60

const cors = require('cors');
const express = require('express');

const productsRouter = require('./routes/products_routes');
const { swaggerSpec, swaggerUi } = require('./swagger');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/products', productsRouter);

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}/api/products`);
});
