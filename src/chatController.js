const { perguntarGemini } = require('./geminiService')

async function enviarPergunta(req, res) {
    try {
        const { pergunta } = req.body

        if (!pergunta) {
            return res.status(400).json({
                erro: 'A pergunta é obrigatória.'
            })
        }

        const resposta = await perguntarGemini(pergunta)

        return res.status(200).json({
            resposta: resposta
        })

    } catch (erro) {
        return res.status(500).json({
            erro: 'Erro ao buscar resposta do Gemini.'
        })
    }
}

module.exports = {
    enviarPergunta
}