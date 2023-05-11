const movieList = require('../models/movieList')
const {MovieList} = require('../models/movieList')

module.exports = {
    addMovie: async(req, res) => {
       await MovieList.create({imageUrl:req.body.img})
       res.status(200).send('success')
    },
    getData: async(req,res) => {
        let list = await MovieList.findAll()
        res.status(200).send(list)
    },
    deleteMovie: async(req,res) => {
        const {id} = req.params
        await MovieList.destroy({where: {id:id}})
        res.status(200).send('success')
    }
}