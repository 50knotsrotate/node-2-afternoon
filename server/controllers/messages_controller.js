var id = 1;
var messages = [];

module.exports = {
    create: (req, res) => { 
        id++
        const { text, time } = req.body
        let newMessage = {
            text,
            time,
            id
        }
        messages.push(newMessage)
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
     },
    update: (req, res) => {
        let index = null
        messages.forEach((message, i) => { 
            if (message.id == req.params.id) {
                index = i
            }
        })
       
        if (index != null) {
            messages[index] = {
                text: req.body.text || messages[index].text,
                time: messages[index].time,
                id: messages[index].id
            }
            res.status(200).send(messages)

        } else { 
            res.status(404).send('Hmm. Cant seem to find that message :(')
        }

     },
    delete: (req, res) => {
         let index = null
         messages.forEach((message, i) => {
             if (message.id == req.params.id) {
                 index = i
             }
         })

         if (index != null) {
             messages.splice(index, 1)
             res.status(200).send(messages)

         } else {
             res.status(404).send('Hmm. Cant seem to find that message :(')
         }
     }
}