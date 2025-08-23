import express from 'express';
import { authorRouter } from './routes/authorRouter.js';
import { bookRouter } from './routes/bookRouter.js';
import { indexRouter } from './routes/indexRouter.js';

const app = express();

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.statusCode || 500).send(err.message);
});
	
const PORT = 3000;
app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}

	console.log('Good morning Morio-cho!');
})