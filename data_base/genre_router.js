const Router = require('../module/Router');
const controller = require('./film_controller');
const router = new Router()



router.get('/genres', controller.getFilm);

router.post('/genres', controller.createFilm);

router.put('/genres', controller.updateFilm);

router.delete('/genres', controller.deleteFilm);

module.exports = router;