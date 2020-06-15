const express = require("express")
const server = express();

const port = 8000;


//router
const useRouter = require('./router/users.router')
const useRouterLocation = require('./router/locations.router')

//middlewares import
const logger = require('./middlewares/logger')
const notFound = require('./middlewares/notFound')
const errorHandle = require('./middlewares/errorHandle')
const bodyParser = require('body-parser')

//midlewares wire up
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(logger); 

server.use('/users', useRouter);
server.use('/location', useRouterLocation);

server.use(notFound)
server.use(errorHandle)

server.listen(port, () => {
  console.log('App rodando!')
})