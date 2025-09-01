// imports
import express from 'express'

// call imported module
const app = express()

// automatic parse json
app.use(express.json())

// array for movies
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

// add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }

    movies.push(movie)
    res.send(movie)
})

// home
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// open server
app.listen(5000, () => console.log('Listening on port 5000'))
