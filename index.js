// const mongoose = require('mongoose');

// const {listarClientes, listarClientesPorId} = require('./crudRead').default;
// const { adicionarCliente } = require('./crudCreat');
// const { atualizarCliente } = require('./crudUptade').default;
// const { deletarCliente } = require('./crudDelete').default;

import mongoose from 'mongoose';
import {listarClientes, listarClientesPorId} from './crudRead.js';
import adicionarCliente from './crudCreat.js';
import atualizarCliente from './crudUptade.js';
import deletarCliente from './crudDelete.js';

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

    // await listarClientesPorId("000000000000000000000001"); 
    // await listarClientesPorId("6900c8a22864f3f432292158");

    // await atualizarCliente("6900c8a22864f3f432292158", "Juliana Souza", "999.888.777-66");
    // await atualizarCliente("6900c8a22864f3f432292158", "Juliana Souza", "555.666.777-88"); 
    // await atualizarCliente("000000000000000000000001", "Teste", "123.456.789-00"); 
    // await atualizarCliente("6900c8a22864f3f432292158", "", "999.888.777-66"); 
    // await atualizarCliente("6900c8a22864f3f432292158", "Teste", "123.456."); 
    // await atualizarCliente("6900c8a22864f3f432292158", "Teste", "");

    // await deletarCliente("6900c8a22864f3f432292158");
    // await deletarCliente("000000000000000000000001");

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