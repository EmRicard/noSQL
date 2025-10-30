import  Cliente from "./cliente.js";

async function atualizarCliente(id, novoNome, novoCpf) {
    try {
        const clienteAtualizado = await Cliente.findByIdAndUpdate(  
            id,
            { nome: novoNome, cpf: novoCpf },
            { new: true, runValidators: true } 
        );  

        if (clienteAtualizado) {
            
            console.log(`\n✅ Cliente atualizado: ID: ${clienteAtualizado._id}, Nome: ${clienteAtualizado.nome}, CPF: ${clienteAtualizado.cpf}`);
            return clienteAtualizado;
        } else {
            console.log(`\n⚠️ Cliente com ID ${id} nao encontrado.`);
        }
    } catch (error) {
        if (error.code === 11000) { 
            console.error(`\n❌ Erro: CPF ${novoCpf} já cadastrado no sistema.`);
        } 
        else if (error.name === 'ValidationError') {
            console.error(`\n❌ Erro de Validação: ${error.message}`);
        }
        else {
            console.error("\n❌ Erro interno ao atualizar cliente:", error.message);    
        }
    }
};
export default atualizarCliente;