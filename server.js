// path
const express = require('express');


// uses express
const app = express();

// creating port
const PORT = process.env.PORT || 3001


// use express to create the route to file in the public folder and give it a route.
app.use(express.static('public'))

// express app to handle data and create req.body

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/apiRoutes.js')(app)
require('./routes/htmlRoutes.js')(app)

// create to start server

app.listen(PORT, () => {
    console.log(`Server available at localhost:${PORT}`)

})
