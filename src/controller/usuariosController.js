const { prisma } = require("../services");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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
async function criarUsuario(dados) {
    // return await executarSQL(`INSERT INTO Usuarios(produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco, dados.produto_desconto})`)

    try {
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds)
        dados = { ...dados, usuario_senha: senhaCriptografada};
        return await prisma.usuarios.create({
            data: dados
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
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds)
        dados = { ...dados, usuario_senha: senhaCriptografada };
        return await prisma.usuarios.update({
            where: { usuario_id: Number(id) },
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
async function login(dados) {
    try {
        let usuario = await prisma.usuarios.findFirst({
            where: {
                usuario_email: dados.usuario_email
            }
        });
        if (usuario) {
            let senhaComparada = await bcrypt.compare(dados.usuario_senha, usuario.usuario_senha);
            if (senhaComparada) {
                let token = jwt.sign({ data: usuario.usuario_senha}, process.env.SEGREDO, { expiresIn: '1h' });
                return {
                    tipo: "success",
                    mensagem: "Usuario logado!",
                    usuario,
                    token
                }
            }
        }
        return {
            tipo: "warning",
            mensagem: "usuário ou senha incorretos"
        }
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }

}

module.exports = { buscarUsuarios, buscarUmUsuario, criarUsuario, editarUsuarios, apagarUsuario, login }