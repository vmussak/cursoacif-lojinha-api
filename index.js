process.env.TZ = 'America/Sao_Paulo';

const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

//rotas
const autenticacaoRoute = require('./core/autenticacao/route');
const clienteTipoRoute = require('./core/clientetipo/route');

const notFound = require('./middlewares/not-found');
const error = require('./middlewares/error');
const cors = require('./middlewares/cors');
const auth = require('./middlewares/auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const helmet = require('helmet');
app.use(helmet());
app.use(cors);

autenticacaoRoute(app);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//app.use(auth);

clienteTipoRoute(app);

app.get('/', (req, res) => {
    res.status(200).json({
        ok: true
    })
})

app.get('/erro', (req, res) => {

    throw new Error("Deu meleca...");
    res.status(200).json({
        ok: true
    })
})

app.use(notFound);
app.use(error);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('API rodando na porta ' + port);
});