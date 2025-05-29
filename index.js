const express = require("express");
const app = express();
const port = 8000;


const usuariosRoutes = require("./src/routes/usuarioRoutes")
const produtosRoutes = require("./src/routes/produtosRoutes")
app.use(express.json())
app.use("/usuarios",usuariosRoutes);
app.use("/produtos",produtosRoutes);
app.use((req,res) => {
    res.status(404).send("Rota nao encontrado");
})

app.listen(port, () => {
    console.log(`servidor de pé: http://localhost:${port}`);
})