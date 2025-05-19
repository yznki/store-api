import {Router} from "express"
const router = Router()

let products = [
  {id: 1, name: "Laptop", price: 1200},
  {id: 2, name: "Phone", price: 800},
]

router.get("/", (req, res) => {
  res.json(products)
})

router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id))
  if (!product) return res.status(404).json({message: "Product not found"})
  res.json(product)
})

router.post("/", (req, res) => {
  const {name, price} = req.body
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  }
  products.push(newProduct)
  res.status(201).json(newProduct)
})

router.put("/:id", (req, res) => {
  const product = products.find((existingProduct) => existingProduct.id === parseInt(req.params.id))
  if (!product) return res.status(404).json({message: "Product not found"})

  const {name, price} = req.body
  if (name) product.name = name
  if (price) product.price = price

  res.json(product)
})

router.delete("/:id", (req, res) => {
  const productIndex = products.findIndex((p) => p.id === parseInt(req.params.id))
  if (productIndex === -1) return res.status(404).json({message: "Product not found"})

  const deleted = products.splice(productIndex, 1)
  res.json(deleted[0])
})

export default router
