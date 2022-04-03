const express = require('express')
const rateLimit = require('express-rate-limit')


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

module.exports = { limiter, sessionLimiter }
