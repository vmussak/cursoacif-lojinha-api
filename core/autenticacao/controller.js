const jwt = require('jsonwebtoken');

module.exports = {
    logar
};

function logar(req, res) {
    if(req.body.login == 'admin' && req.body.senha == '123'){
        
        const token = jwt.sign({id: 1}, 'segredo', {
            expiresIn: 3000
        })
        return res.status(200).json({
            token: token
        })
    }
    //jsonwebtoken

    return res.status(401).json({
        message: 'Login ou senha incorretos'
    })
}