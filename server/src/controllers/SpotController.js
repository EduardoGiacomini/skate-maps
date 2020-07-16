const SpotRepository = require('../repositories/SpotRepository');

class SpotController {
    static async findAll(req, res, next) {
        try {
            const spots = await SpotRepository.findAll(req.connection);
            return res.send(spots);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

module.exports = SpotController;
