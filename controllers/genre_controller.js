"use strict";

const Genre = require('./film_model');

const getGenre =  async (req, res) => {
    try {
        const all_genres = await Genre.query(
            "SELECT * FROM genres");

        res.send(all_genres.rows);
    } catch (err) {
        console.log(err);
    }
}

const createGenre = async (req, res) => {
    try {
        const genreName= req.body.genreName;
        const newGenre = await Genre.query(
            "INSERT INTO genres (genre_name) values ($1) RETURNING *",
            [genreName])

        res.send(newGenre.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const deleteGenre = async (req, res) => {
    try{
        const genreId = req.body.genreId;
        const curGenre = await Genre.query(
            "DELETE FROM genres WHERE genre_id = $1",
            [genreId]);

        res.send(curGenre.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const updateGenre = async (req, res) => {
    try {
        const {genreId, genreName} = req.body;
        const curGenre = await Genre.query(
            "UPDATE genres SET genre_name = $1 WHERE genre_id = $2 RETURNING *;",
            [genreName, genreId]);

        res.send(curGenre.rows[0]);
    } catch (err) {
    console.log(err);
    }
}

module.exports = {
    getGenre,
    createGenre,
    deleteGenre,
    updateGenre
}

