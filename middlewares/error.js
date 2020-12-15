module.exports = (err, req, res, next) => {
    res.status(500).json({
        error: 'Ocorreu um erro não tratado',
        message: err.message
    });

    next();
}