var express = require('express')
var app = express()


 var messages =[{text: 'some text', owner: 'Tome'},
              {text: 'Other Messages', owner: 'Jane'}            
]
app.get('/messages', (req, res) => {
    res.json(messages)
})

app.listen(3000)