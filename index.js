const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors")

const usuariosRoutes = require("./src/routes/usuarioRoutes")
const produtosRoutes = require("./src/routes/produtosRoutes");
const { login } = require("./src/controller/usuariosController");
const { rotaProtegida } = require("./src/utils");


app.use(cors())
app.use(express.json())
app.post("/login", async(req,res) => {
    res.send(await login(req.body))
})
app.use("/usuarios",rotaProtegida, usuariosRoutes);
app.use("/produtos",rotaProtegida,produtosRoutes);
app.use((req,res) => {
    res.status(404).send("Rota nao encontrado");
})

app.listen(port, () => {
    console.log(`servidor de pé: http://localhost:${port}`);
})