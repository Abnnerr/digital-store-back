const { executarSQL } = require("../services")

const router = require("express").Router()


router.get("/", async (req, res) => {
    res.send(await executarSQL("SELECT * FROM produtos;"))
})

router.post("/", (req, res) => {
    res.send('cria um usuario')
})

router.put("/:id",  async (req, res) => {
    res.send(`edita um usuario com o id: ${req.params.id}`)
    res.send( await executarSQL(`SELECT produtos_id FROM produtos`))
})

router.get("/:id", (req, res) => {
    res.send(`busca o usuario com o id: ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
    res.send(`apaga um usuario com o id: ${req.params.id}`)
})


module.exports = router;