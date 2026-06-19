const request = require('supertest')
const app = require('../src/server')

describe('Testes da rota /perguntar', () => {

    test('Deve retornar erro quando a pergunta estiver vazia', async () => {

        const resposta = await request(app)
            .post('/perguntar')
            .send({})

        expect(resposta.statusCode).toBe(400)

    })

    test('Deve aceitar uma pergunta válida', async () => {

        const resposta = await request(app)
            .post('/perguntar')
            .send({
                pergunta: 'Olá'
            })

        expect(resposta.statusCode).toBe(200)

    }, 30000)

})