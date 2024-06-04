const Blague = require('../models/blague');

const controllerBlague = {
    findBlague: async (req,res) => {
        if(!isNaN(req.params.id)){
            const result = await Blague.findByPk(req.params.id);
            return res.status(200).json({error: false, data: result});
        } else {
            return res.status(404).json({error: true, message: "Need a valid id"});
        }
    },

    allBlague: async (req, res) => {
        const data = await Blague.findAll();
        return res.status(200).json({error: false, data: data});
    },

    randomBlague: async (req, res) => {
        const { count, rows } = await Blague.findAndCountAll();
        const random = rows[Math.floor(Math.random()*count)];
        return res.status(200).json({error: false, data: random});
    }

};

module.exports = controllerBlague;