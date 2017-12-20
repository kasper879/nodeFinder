const express = require('express')
const app = express()

 var PORT = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Node finder'))
app.get('/bitch', (req, res) => res.send('Bitch Found'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))