import  Cliente  from "./cliente.js";

async function deletarCliente(id) {
    try {
        const clienteDeletado = await Cliente.findByIdAndDelete(id);    
        if (clienteDeletado) {
            console.log(`\n✅ Cliente deletado: ID: ${clienteDeletado._id}, Nome: ${clienteDeletado.nome}, CPF: ${clienteDeletado.cpf}`);
            return clienteDeletado;
        }
        else {
            console.log(`\n⚠️ Cliente com ID ${id} nao encontrado.`);
        }
    } catch (error) {
        console.error("\n❌ Erro interno ao deletar cliente:", error.message);    

    }

}
export default deletarCliente;