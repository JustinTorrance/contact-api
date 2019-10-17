const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())

app.get('/api/v1/contacts', (request, response) => {
  database('contacts').select()
  .then((contacts) => {
    response.status(200).json(contacts)
  })
  .catch((error) => {
    response.status(500).json({ error })
  })
})

app.delete('/api/v1/contacts/:id', (request, response) => {
  const idForDelete = request.params.id
  if(!idForDelete) {
    response.status(422).json({
      error: `Missing id from request parameters`
    })
  } else {
    database('contacts')
      .where('id', request.params.id)
      .del()
      .then(() => {
        response.json(`Successfully deleted contact ${idForDelete}`)
      })
      .catch(error => {
        response.status(500).json({ error })
      })
  }
})

app.post('/api/v1/contacts', (request, response) => {
  const contact = request.body
  database('contacts').insert(contact)
    .then(projects => {
      response.status(201).json('Contact successfully added')
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.put('/api/v1/contacts/:id', (request, response) => {
  const { first_name, last_name, phone, email } = request.body
  database('contacts')
    .where('id', request.params.id)
    .update({ first_name, last_name, phone, email })
      .then(contact => {
        response.status(200).json(`Contact for ${first_name} has been updated`)
      })
      .catch(error => {
        response.status(422).json({ error })
      })
})








module.exports = app