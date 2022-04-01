const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// middleware to handle req, res data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/userRoutes'))

// override express default error handler
app.use(errorHandler)

app.listen(port, () => console.log(`ITS ALIVE on port http://localhost:${port}`))


