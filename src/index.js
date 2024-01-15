const app = require('./bootstrap')
const port = 3001
app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})