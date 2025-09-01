// imports
import express from 'express'

// call imported module
const app = express()

// send response
app.get('/', (req, res) => {
    res.send('My New App!')
})

// heroes api
app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk'])
})

// get id | single parameter
app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id)
})

/*
// get title and publisher | multi parameters
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send(req.params)
})
*/

// query parameters
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query])
})

// open server
app.listen(3000, () => console.log('Listening on port 3000'))


