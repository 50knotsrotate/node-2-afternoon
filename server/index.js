const express = require('express')
const app = express()
const messagesController = require('./controllers/messages_controller')
app.use(express.json())

const PORT = 3000;
app.get('/api/messages', messagesController.read)
app.post('/api/messages', messagesController.create)
app.put('/api/messages/:id', messagesController.update)

app.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
})