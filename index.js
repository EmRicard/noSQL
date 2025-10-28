const mongoose = require('mongoose');
const {listarClientes, listarClientesPorId} = require('./crudRead').default;
const { adicionarCliente } = require('./crudCreat');

const conexao = 'mongodb://localhost:27017/teste';




async function main() {
    console.log("--- Iniciando Operações CRUD (C) no MongoDB ---");

    // await adicionarCliente("Juliana Lima", "111.222.333-44");
    // await adicionarCliente("Pedro Rocha", "555.666.777-88");
 
    // await adicionarCliente("Juliana Lima", "111.222.333-44"); 
    // await adicionarCliente("", "111.222.333-44"); 
    // await adicionarCliente("Juliana Lima", "111.222."); 
    // await adicionarCliente("Juliana Lima", ""); 

    await listarClientes();

    await listarClientesPorId("000000000000000000000001"); 
    await listarClientesPorId("6900c8a22864f3f432292158");



    await mongoose.connection.close(); 
    console.log("\nConexão com MongoDB encerrada.");
}


mongoose.connect(conexao)
    .then(() => {
        console.log("✅ Conexão com MongoDB estabelecida com sucesso!");
        main(); 
    })
    .catch(error => {
        console.error("❌ ERRO FATAL: Não foi possível conectar ao MongoDB.");
        console.error("Detalhes:", error.message);
    });