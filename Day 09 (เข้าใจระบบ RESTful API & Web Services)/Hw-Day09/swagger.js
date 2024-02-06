const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const swaggerOptions = {
	definition: {
		openapi: '3.1.0',
		info: {
			title: 'Product API',
			version: '1.0.0',
			description: 'API document for Products',
		},
		servers: [
			{
				url: 'http://localhost:3000',
			},
			{
				url: 'http://127.0.0.1:3000',
			},
		],
	},
	// looks for configuration in specified directories
	apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerSpec, swaggerUi };
