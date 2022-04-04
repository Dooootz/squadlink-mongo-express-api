const express = require('express')
const rateLimit = require('express-rate-limit')


const limiter = rateLimit({
    // 1000ms = 1sec
    // 1 req per Second 
    windowMs: 1000,
    max: 1,
    message: "too many requests - 1 request per Second limit"
})

const sessionLimiter = rateLimit({
    // rate limiter math explaination 
    // 1min x 60 = 1hr 
    // 1hr x 24 = 1 earth rotation
    windowMs: (60000 * 60) * 24, 
    // max 1000 requests per session
    max: 1000,
    message: "session limit reached"
})

// export the limiter functions to the server
// limiter functions are ran across all api endpoints 
module.exports = { limiter, sessionLimiter } 
