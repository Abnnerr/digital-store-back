const { executarSQL } = require("../services")
const { PrismaClient } = require("../generated/prisma")
const prisma = new PrismaClient();

async function buscarProdutos() {
    return await prisma.produtos.findMany()
}

async function buscarUmProdutos(id) {
    return await executarSQL(`SELECT * FROM produtos WHERE produto_id = ${id}`)
}
async function criarProduto(dados) {
    return await executarSQL(`INSERT INTO produtos(produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco, dados.produto_desconto})`)
}
async function editarProduto(id, dados) {
        return await executarSQL(`UPDATE produtos SET produto_nome = '${dados.produto_nome}', produto_preco = ${dados.produto_preco}, produto_desconto = ${dados.produto_desconto}, produto_imagem = '${dados.produto_imagem}', marca_id = ${dados.marca_id}, categoria_id = ${dados.categoria_id} WHERE produtos_id = ${id};`);
}

module.exports = {buscarProdutos,buscarUmProdutos, criarProduto, editarProduto}