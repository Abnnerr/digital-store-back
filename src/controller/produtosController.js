const { executarSQL, prisma } = require("../services");

async function buscarProdutos() {

    try {
        return await prisma.produtos.findMany();
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }

}

async function buscarUmProdutos(id) {
    try {
        return await prisma.produtos.findUnique({
            where: { produtos_id: Number(id) }
        });
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}
async function criarProduto(data) {
    // return await executarSQL(`INSERT INTO produtos(produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco, dados.produto_desconto})`)
    try {
        return await prisma.produtos.create({
            data
        })
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}
async function editarProduto(id, dados) {
    // return await executarSQL(`UPDATE produtos SET produto_nome = '${dados.produto_nome}', produto_preco = ${dados.produto_preco}, produto_desconto = ${dados.produto_desconto}, produto_imagem = '${dados.produto_imagem}', marca_id = ${dados.marca_id}, categoria_id = ${dados.categoria_id} WHERE produtos_id = ${id};`);
    try {
        return await prisma.produtos.update( {
            where: {produtos_id: Number(id)},
            data: dados
        })
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}
async function apagarProduto(id) {
    try {
        return await prisma.produtos.delete({
            where: {
                produtos_id: Number(id)
            }
        })
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}

module.exports = { buscarProdutos, buscarUmProdutos, criarProduto, editarProduto, apagarProduto }