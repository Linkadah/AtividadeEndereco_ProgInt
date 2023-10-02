import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listEndereco } from './app/useCases/endereco/listEndereco'
import { creatEndereco } from './app/useCases/endereco/createEndereco'
import { listCidade } from './app/useCases/cidade/listCidade';
import { createCidade } from './app/useCases/cidade/createCidade';
import { createBairro } from './app/useCases/bairro/createBairro';
import { listBairro } from './app/useCases/bairro/listBairro'
export const router = Router();

//config do multer
const upload = multer({ 
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});
// cria endereço
router.post('/endereco', creatEndereco);

// lista endereco
router.get('/endereco', listEndereco);

// cria cidade
router.post('/cidade', createCidade);

// lista cidade
router.get('/cidade', listCidade);

// cria bairro
router.post('/bairro', createBairro);

// lista bairro
router.get('/bairro', listBairro);