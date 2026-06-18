const formulario = document.getElementById('formulario')
const txtPergunta = document.getElementById('txtpergunta')
const txtResposta = document.getElementById('txtresposta')

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    const pergunta = txtPergunta.value

    txtResposta.innerText = 'Carregando resposta...'

    const respostaServidor = await fetch('/perguntar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pergunta: pergunta
        })
    })

    const dados = await respostaServidor.json()

    txtResposta.innerText = dados.resposta
})