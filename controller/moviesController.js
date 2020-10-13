const fs =  require('fs')
const db = require('../database/models')

module.exports ={
    all: function(req,res){
        db.Movies.findAll()
        .then( peliculas => {
            res.render('movies', {peliculas:peliculas})
        })
    },
    detail: function(req,res){
        idProducto = req.params.id;
        db.Movies.findByPk(req.params.id,{
            include:[{association: 'Genres'}]
        })
        .then( pelicula => {
            res.render('movie', {pelicula:pelicula})
        })
    },
    create: function(req,res){
        res.render('new')
    },
    add: function(req,res){
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.realese_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
        })
        .then( peliculas => {
            res.redirect('/movies')
        })
        .catch(err => {
            res.send(err)
        })
    },
    edit: function(req,res){
        db.Movies.findByPk(req.params.id)
        .then( pelicula => {
            res.render('editMovie', {pelicula:pelicula})
        })
    },
    change: function(req,res){
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.realese_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then( peliculas => {
            res.redirect('/movies/detail/' + req.params.id)
        })
    },
    delete: function(req,res){
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        .then( peliculas => {
           return res.redirect('/movies')
        })
        .catch(error => {
            res.send(error)
        })
    }
}