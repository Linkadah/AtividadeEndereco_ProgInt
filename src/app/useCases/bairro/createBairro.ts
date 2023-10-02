import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

export async function createBairro(req: Request, res: Response) { 
	try {
		//res.send('Ok post category');
		const {name} = req.body; 
		const bairro = await Bairro.create({name}); 
		res.status(201).json(bairro);
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}