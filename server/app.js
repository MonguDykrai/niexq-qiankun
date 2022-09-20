const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user/1', (req, res) => {
  res.send({ username: 'jack', age: 29 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
