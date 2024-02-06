const express = require('express');
const router = express.Router();
const {
	getProductById,
	getAllProducts,
	insertProduct,
	updateProduct,
	deleteProduct,
	searchProducts,
} = require('../controllers/products_controllers');

const { swaggerSpec, swaggerUi } = require('../swagger');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /products:
 * get:
 * summary: Get all products
 * description: Get all products
 * responses:
 * 200:
 * description: A list of products
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Product'
 * 500:
 * description: Some error happened
 */
router.get('/:id', getProductById);
router.get('/', getAllProducts);
router.post('/', insertProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/search/:keyword', searchProducts);

module.exports = router;
