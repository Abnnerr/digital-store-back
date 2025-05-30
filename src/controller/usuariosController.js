const { prisma } = require("../services");

async function buscarUsuarios() {

    try {
        return await prisma.usuarios.findMany();
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }

}

async function buscarUmUsuario(id) {
    try {
        return await prisma.usuarios.findUnique({
            where: { usuario_id: Number(id) }
        });
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}
async function criarUsuario(data) {
    // return await executarSQL(`INSERT INTO Usuarios(produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco, dados.produto_desconto})`)
    try {
        return await prisma.usuarios.create({
            data
        })
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}
async function editarUsuarios(id, dados) {
    // return await executarSQL(`UPDATE Usuarios SET produto_nome = '${dados.produto_nome}', produto_preco = ${dados.produto_preco}, produto_desconto = ${dados.produto_desconto}, produto_imagem = '${dados.produto_imagem}', marca_id = ${dados.marca_id}, categoria_id = ${dados.categoria_id} WHERE Usuarios_id = ${id};`);
    
    try {
        return await prisma.usuarios.update( {
            where: {usuarios_id: Number(id)},
            data: dados
        })
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}
async function apagarUsuario(id) {
    try {
        return await prisma.usuarios.delete({
            where: {
                usuarios_id: Number(id)
            }
        })
    } catch (error) {
        return {
            tipo: "erro",
            mensagem: error.message
        }
    }
}

module.exports = { buscarUsuarios, buscarUmUsuario, criarUsuario, editarUsuarios, apagarUsuario }