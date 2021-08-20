const app = require('./app');
const port = 8080;

app.set('port', process.env.port || port);

const server = app.listen(app.get('port'), () => {
  console.log(`Nasluchiwanie portu ${server.address().port}`)
})