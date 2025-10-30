// const { Cliente } = require('./cliente.js');
import  Cliente  from "./cliente.js";


async function adicionarCliente(nome, cpf) {
    try {
        const resultado = await Cliente.create({
            nome: nome,
            cpf: cpf,
  
        });

        console.log(`\n✅ Cliente ${resultado.nome} inserido com sucesso (ID: ${resultado._id})`);
        return resultado;

    } catch (error) {
        if (error.code === 11000) { 
            console.error(`\n❌ Erro: CPF ${cpf} já cadastrado no sistema.`);
        } 
        else if (error.name === 'ValidationError') {
            console.error(`\n❌ Erro de Validação: ${error.message}`);
        }
        else {
            console.error("\n❌ Erro interno ao inserir cliente:", error.message);
        }
    }
}

export default adicionarCliente ;