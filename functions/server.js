const app = require('./functions/app.js')
const port = 3000

const server = app()

server.listen(port, () => console.log(`🚀 App listening on localhost:${port}!`))