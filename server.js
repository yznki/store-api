import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get("/", (req, res) => {
  console.log("Hello from home.")
})
