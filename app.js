const express = require('express')
const app = express()

 var PORT = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Node finder'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))