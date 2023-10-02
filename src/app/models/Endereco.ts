import {model, Schema } from "mongoose";

export const Endereco = model("Endereco", new Schema({ 
	name: { 
		type: String,
		required: true, 
	},
    complemento: {
        type: String,
        required: false,
    },
	numero: { 
		type: String,
		required: true,
	},
    bairro: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    cidade: {
        type: Schema.Types.ObjectId,
        required: true
    }
}));