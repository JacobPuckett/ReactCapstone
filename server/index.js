require('dotenv').config()
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {MovieList} = require('./models/movieList')
const {login} = require('./controllers/auth')
const {register} = require('./controllers/auth')
const express = require("express");
const cors = require('cors');
const { addMovie } = require('./controllers/movie');
const { getData } = require('./controllers/movie')
const { deleteMovie } = require('./controllers/movie')

const PORT = process.env.PORT || 4000

const app = express();
app.use(cors())
app.use(express.json())
sequelize.sync()

app.get('/movielist', getData)
app.post('/movielist', addMovie)
app.post('/login', login)
app.post('/register', register)
app.delete('/movielist/:id', deleteMovie)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});