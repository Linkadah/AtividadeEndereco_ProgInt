import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017') // conecta com o bd
	.then(() => {

		const app = express();
		const port = 3002;

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json()); 
		app.use(router); 

		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`); 
		});
	})
	.catch(() => console.log('Erro ao conectar no mongoDb')); // msg de erro