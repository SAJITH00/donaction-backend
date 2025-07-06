// import json server
const jsonServer = require('json-server')

// import cors
const cors = require('cors')

// craete a server using json server
const server = jsonServer.create()

// setup a middleware
const middleware = jsonServer.defaults()

// setup routers 
const route = jsonServer.router('db.json')

// impimenting use
server.use(cors())
server.use(middleware)
server.use(route)

// create a port
const PORT =process.env.PORT || 3000

// start server
server.listen(PORT,()=>{
console.log("server runing on the port",PORT);
})