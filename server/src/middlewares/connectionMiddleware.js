module.exports = (pool) => async (req, res, next) => {
    try {
        const connection = await pool.connect();
        req.connection = connection;
        next();
        res.on('finish', () => req.connection.release(true));
    } catch (error) {
        return next(error);
    }
};
