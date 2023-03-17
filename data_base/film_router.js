const Router = require('../module/Router');
const controller = require('./film_controller');
const router = new Router()



router.get('/films', controller.getFilm)

router.post('/films', controller.createFilm)

module.exports = router