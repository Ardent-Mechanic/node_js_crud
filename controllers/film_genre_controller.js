"use strict";

const Genre = require('../src/db');
const Film = require("../src/db");

const getFilmGenre =  async (req, res) => {
    try {
        const allFilmsGenres = await Genre.query(
            "SELECT * FROM films_genres");

        res.send(allFilmsGenres.rows);
    } catch (err) {
        console.log(err);
    }
}

const createFilmGenre = async (req, res) => {
    try {
        const {filmId, genreId} = req.body;
        const newFilmGenre = await Film.query(
            "INSERT INTO films_genres (film_id, genre_id) values ($1, $2) RETURNING *",
            [filmId, genreId])

        res.send(newFilmGenre.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const deleteFilmGenre = async (req, res) => {
    try{
        const {filmId, genreId} = req.body;
        const curFilmGenre = await Genre.query(
            "DELETE FROM films_genres WHERE film_id = $1 AND genre_id = $2",
            [filmId, genreId]);

        res.send(curFilmGenre.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getFilmGenre,
    createFilmGenre,
    deleteFilmGenre,
}

