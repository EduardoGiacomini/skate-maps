class SpotRepository {
    static async findAll(connection) {
        const { rows } = await connection.query('SELECT * FROM SPOTS;');
        return rows;
    }
}

module.exports = SpotRepository;
