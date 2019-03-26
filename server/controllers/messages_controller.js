var id = 1;
var messages = [
    {
        text: "Hi this is a TEST message hahahahah cause it sounds like text message LMAO xD",
        time: "About tree fiddy",
        id
    }
];


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
                console.log(index)
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
        //find
     }
}