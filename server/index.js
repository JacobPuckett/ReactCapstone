require('dotenv').config()
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const express = require("express");
const cors = require('cors')

const {PORT} = process.env || 4000

const app = express();
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});