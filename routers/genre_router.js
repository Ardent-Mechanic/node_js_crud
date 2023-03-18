const Router = require('../module/Router');
const controller = require('../controllers/genre_controller');
const router = new Router()



router.get('/genres', controller.getGenre);

router.post('/genres', controller.createGenre);

router.put('/genres', controller.updateGenre);

router.delete('/genres', controller.deleteGenre);

module.exports = router;