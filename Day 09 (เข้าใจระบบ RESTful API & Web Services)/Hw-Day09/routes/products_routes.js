const express = require('express');

const router = express.Router();

const {
	getAllProducts,
	getProductById,
	insertProduct,
	updateProduct,
	deleteProduct,
	searchProducts,
} = require('../controllers/products_controllers');

router.use((req, res, next) => {
	console.log('Hello API');
	next();
});
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllProducts);
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getProductById);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               discount:
 *                 type: number
 *                 format: float
 *               review_count:
 *                 type: number
 *                 format: int32
 *               image_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.post('/', insertProduct);
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               discount:
 *                 type: number
 *                 format: float
 *               review_count:
 *                 type: number
 *                 format: int32
 *               image_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.put('/:id', updateProduct);
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteProduct);
/**
 * @swagger
 * /api/products/search/{keyword}:
 *   get:
 *     summarry: Get products by keyword
 *     parameters:
 *       - in: path
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.get('/search/:keyword', searchProducts);

module.exports = router;
