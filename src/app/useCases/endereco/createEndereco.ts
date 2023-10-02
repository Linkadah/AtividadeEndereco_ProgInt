import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function creatEndereco(req: Request, res: Response) { 
	try {
		//res.send('Ok post category');
		const {name, numero, complemento, bairro, cidade} = req.body; 
		const endereco = await Endereco.create({name, numero, complemento, bairro, cidade}); 
		res.status(201).json(endereco); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}