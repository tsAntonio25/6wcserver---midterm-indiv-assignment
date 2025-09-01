// imports
import express from 'express'

// call imported module
const app = express()

// array for GET method
const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
},
{
    id: 3,
    title: 'Iron Man'
    }]

// get all movies
app.get('/api/movies', (req, res) => {
    res.send(movies)
})

// get specific movie by id
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id))
    if (!movie) return res.status(404).send(`The movie with an id of ${req.params.id} was not found`)
    res.send(movie)
})

// home
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// open server
app.listen(4000, () => console.log('Listening on port 4000'))

