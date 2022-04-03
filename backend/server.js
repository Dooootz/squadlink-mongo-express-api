const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const http = require('http')
const rateLimit = require('express-rate-limit')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db') 
const logger = require('./config/logger')


const port = process.env.PORT || 5000

connectDB()

const app = express()

// middleware to handle req, res data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const limiter = rateLimit({
    windowMs: 1000,
    max: 1,
    message: "too many requests - 1 request per Second limit"
})

const sessionLimiter = rateLimit({
    // 1min x 60 = 1hr 
    // 1hr x 24 = 1 earth rotation
    windowMs: (60000 * 60) * 24, 
    max: 1000,
    message: "session limit reached"
})




// override express default error handler
app.use(errorHandler)
app.use(limiter)
app.use(sessionLimiter)

app.use((req, res, next) => {
    console.log(req.body);
    next()
})

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/userStats', require('./routes/userStatsRoutes'))
// app.use('/api/logs', require('./routes/logs'))



app.listen(port, () => console.log('info', `ITS ALIVE on port http://localhost:${port}`))






























// const server = http.createServer((request, response) => {
//     const { rawHeaders, httpVersion, method, socket, url } = request;
//     const { remoteAddress, remoteFamily } = socket;
  
//     console.log(
//       JSON.stringify({
//         timestamp: Date.now(),
//         rawHeaders,
//         httpVersion,
//         method,
//         remoteAddress,
//         remoteFamily,
//         url
//       })
//     );
  
//     response.end();
//   });

//   server.listen(8888)