const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { enviarPergunta } = require('./chatController')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.post('/perguntar', enviarPergunta)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})