const http = require('http');
const PORT = process.env.PORT || 5000;


const server = http.createServer((request, response) => {
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    // console.log("User-Agent: " + request.headers["user-agent"]);
    // console.log("Все заголовки");
    // console.log(request.headers);
    response.end();
});

const start = async () => {
    try {
        // await mongoose.connect('mongodb+srv://user:123@cluster0.4comu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


        server.listen(PORT, () => {
            console.log(`Server running at hhtp://localhost:${PORT}/`)
        });
    } catch (err) {
        console.log(err)
    }
}

start();
