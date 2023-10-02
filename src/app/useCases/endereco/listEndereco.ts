import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function listEndereco(req: Request, res: Response) { // lista os produtos
	try {
		const products = await Endereco.find(); // consulta o BD usando solicitação GET

		res.json(products); // resposta 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}