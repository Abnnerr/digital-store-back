const { buscarProdutos, criarProduto, editarProduto, apagarProduto } = require("../controller/produtosController")
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
router.put("/:id", async (req, res) => {
    res.send(await editarProduto(req.params.id, req.body))
})
router.delete("/:id", async(req, res) => {
    res.send(await apagarProduto(req.params.id))
})
module.exports = router;