const db = require('../models/databaseModel.js')
const procedure = {}

procedure.createEntry = (req, res, next) => {
    const {location, procedure, date, insurance, preinsuranceCost, oopCost} = req.body

    const query = `INSERT INTO megatable (location, procedure, date, insurance, pre_insurance, out_of_pocket)
    values($1, $2, $3, $4, $5, $6)`

    db.query(query, [location, procedure, date, insurance, preinsuranceCost, oopCost])
    .then(()=> next())
    .catch((err)=> next(err))
}

module.exports = procedure