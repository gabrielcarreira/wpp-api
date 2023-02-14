import venom from 'venom-bot'
import express, { response } from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen('8080', () => {
  console.log('API On-line')
})

venom
  .create('sessionName', (base64Qrimg, asciiQR, attempts, urlCode) => {
    console.log('Number of attempts to read the qrcode: ', attempts)
    console.log('Terminal qrcode: ', asciiQR)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro)
  })

function start(client) {
  app.post('/wpp', (request, response) => {
    const { user, msg } = request.body
    client.sendText(user, msg)
    return response.status(200).json('Enviado!')
  })
}
