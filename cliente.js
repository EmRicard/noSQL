import mongoose from 'mongoose';


const ClienteSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: [true, 'O nome é obrigatório.'], 
        trim: true 
    },
    cpf: { 
        type: String, 
        unique: true, 
        required: [true, 'O CPF é obrigatório.'],
        match: [/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF deve estar no formato 000.000.000-00.']
    },
    data_cadastro: {
        type: Date,
        default: Date.now 
    }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);


export default  Cliente ;