"use strict";

const Film = require('./film_model');

const getFilm =  async (req, res) => {
    try {
        const newFilm = await Film.query(
            "SELECT * FROM films");

        res.send(newFilm.rows);
    } catch (err) {
        console.log(err);
    }
}

const createFilm = async (req, res) => {
    try {
        const {filmName, filmDate} = req.body;
        const newFilm = await Film.query(
            "INSERT INTO films (film_name, year_of_production) values ($1, $2) RETURNING *",
            [filmName, filmDate])

        res.send(newFilm.rows[0]);
    } catch (err) {
        console.log(err);
    }
    // const film = await Film.create(req.body) // Действия с базой вставка данных
}

const deleteFilm = async (req, res) => {
    try{
        const filmId = req.body;
        const newFilm = await Film.query(
            "DELETE FROM films WHERE film_id = $1 RETURNING *;",
            [filmId]);

        res.send(newFilm.rows);
    } catch (err) {
        console.log(err);
    }
}

const updateFilm = async (req, res) => {
    try{
        const {filmId, filmName, filmDate} = req.body;
        const newFilm = await Film.query(
            "UPDATE films SET (film_name, year_of_production) = ($1, $2) WHERE film_id = $3 RETURNING *;",
            [filmName, filmDate, filmId]);

        res.send(newFilm.rows[0]);
    } catch (err) {
    console.log(err);
    }
}

module.exports = {
    getFilm,
    createFilm,
    deleteFilm,
    updateFilm
}

