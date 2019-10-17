const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())

app.get('/api/v1/contacts', (request, response) => {
  response.json('howdy')
})








module.exports = app