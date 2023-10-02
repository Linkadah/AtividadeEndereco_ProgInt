import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function listCidade(req: Request, res: Response) { //lista os produtos
	try {
		const cidade = await Cidade.find(); // consulta o BD usando solicitação GET

		res.json(cidade);
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}