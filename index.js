const express = require("express");
const app = express();
const port = 8000;


const usuariosRoutes = require("./src/routes/usuarioRoutes")

app.get("/", (req,res) => {
    res.send('ola mundo');
})
app.get("/bem-vindo", (req,res) => {
    res.send('seja bem-vindo');
})

app.use("/usuarios",usuariosRoutes);

app.use((req,res) => {
    res.status(404).send("Rota nao encontrado");
})

app.listen(port, () => {
    console.log(`servidor de pé: http://localhost:${port}`);
})