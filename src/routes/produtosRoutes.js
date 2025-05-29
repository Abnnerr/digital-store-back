const { buscarProdutos, criarProduto, editarProduto } = require("../controller/produtosController")
const { executarSQL } = require("../services")

const router = require("express").Router()


router.get("/", async (req, res) => {
    res.send(await buscarProdutos())

})
router.get("/:id", async (req, res) => {
    res.send(await buscarProdutos(req.params.id))
})
router.post("/", async (req, res) => {
    res.send(await criarProduto(req.body))
})
router.put("/", async (req, res) => {
    res.send(await editarProduto(req.params.id, req.body))
})
module.exports = router;