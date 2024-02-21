const express = require('express');

const app = express();

const usersRouter = require('./routes/users_routes');

const port = 3002;

/*
router.use((req, res, next) => {
	console.log('Time:', Date.now());
	next();
});

app.use(router);
*/

app.use('/', usersRouter);

app.listen(port, () => {
	console.log('listening on port: ' + port);
});
