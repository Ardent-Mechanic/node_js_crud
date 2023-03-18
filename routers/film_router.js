const Router = require('../module/Router');
const controller = require('../controllers/film_controller');
const router = new Router()



router.get('/films', controller.getFilm);

router.post('/films', controller.createFilm);

router.put('/films', controller.updateFilm);

router.delete('/films', controller.deleteFilm);

module.exports = router;