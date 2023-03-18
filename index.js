const http = require('http');
const PORT = process.env.PORT || 5000;
const Application = require('./module/Application');
const filmRouter = require('./routers/film_router');
const genreRouter = require('./routers/genre_router');
const filmGenreRouter = require('./routers/film_genre_router');
const jsonParser = require('./module/parseJson');
const parseUrl = require('./module/parseUrl');


const app = new Application()

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(filmRouter);
app.addRouter(genreRouter);
app.addRouter(filmGenreRouter);


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

start();
