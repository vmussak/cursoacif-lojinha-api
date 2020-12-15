const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./core/autenticacao/route.js', './core/clientetipo/route.js']

swaggerAutogen(outputFile, endpointsFiles)