import { Cliente } from './cliente.js';

async function listarClientes() {
    try {
        const clientes = await Cliente.find();
        console.log("\n--- Lista de Clientes ---");
        clientes.forEach(cliente => {
            console.log(`ID: ${cliente._id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
        });
    } catch (error) {
        console.error("\n❌ Erro ao listar clientes:", error.message);
    }
}

async function listarClientesPorId(id) {
    try {
        const cliente = await Cliente.findById(id); 
        if (cliente) {
            console.log(`\n✅ Cliente encontrado: ID: ${cliente._id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
        } else {
            console.log(`\n⚠️ Cliente com ID ${id} não encontrado.`);
        }
    } catch (error) {
        console.error("\n❌ Erro ao listar cliente por ID:", error.message);
    }
}

export default { listarClientes, listarClientesPorId };