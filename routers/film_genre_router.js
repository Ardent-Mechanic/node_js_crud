const Router = require('../module/Router');
const controller = require('./film_genre_controller');
const router = new Router()



router.get('/films_genres', controller.getFilmGenre);

router.post('/films_genres', controller.createFilmGenre);

router.put('/films_genres', controller.updateFilmGenre);

router.delete('/films_genres', controller.deleteFilmGenre);

module.exports = router;