const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //const token = req.headers['Authorization'];
    const token = req.headers['teste'];

    if(!token) return res.status(401).json({
        message: 'Usuário não autenticado'
    });

    //sequelize
    //pg

    jwt.verify(token, 'segredo', (err, decoded) => {
        if(err) {
            return res.status(401).json({
                message: 'Usuário não autenticado'
            });
        }

        req.userId = decoded.id;
        next();
    })
}