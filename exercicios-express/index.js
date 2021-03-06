const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(saudacao('Guilherme'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

// http://localhost:3000/clientes/relatorio?completo=true&ano=2018
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

// http://localhost:3000/clientes/5
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

//app.use((req, res) => { // Para atender qualquer método (get/post/put/delete)
app.get('/', (req, res) => { // Atende apenas o método GET
    res.send('Método GET')
})

app.post('/', (req, res) => { // Atende apenas o método POST
    res.send('Método POST')
})

app.put('/', (req, res) => { // Atende apenas o método PUT
    res.send('Método PUT')
})

app.delete('/', (req, res) => { // Atende apenas o método DELETE
    res.send('Método DELETE')
})

app.get('/json', (req, res) => { // Atende apenas o método GET
    res.json({
        nome: 'iPad 32GB',
        price: 1899.00,
        discount: 0.12
    })
})

app.use('/jsonarray', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/jsonarray', (req, res, next) => { // Atende apenas o método GET
    console.log('Durante...')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1 },
            {id: 34, name: 'Bia', position: 2 },
            {id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
})

app.use('/jsonarray', (req, res, next) => {
    console.log('Depois...')
    next()
})

/*app.use('/teste', (req, res) => {
    res.send('Estou testando!')
})*/

app.listen(3000, () => {
    console.log('Backend executando...')
})