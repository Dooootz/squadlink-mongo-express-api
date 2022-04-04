// middleware = functions that execute during the request-response cycle
const errorHandler = (err, req, res, next) => {

    // if their is no status code, send 500 status code 
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)

    // send JSON default error message
    // if we are in development stage, send our stack error trace
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

// export function to be used in our server 
// This middleware will run across all endpoint requests  
module.exports = {
    errorHandler,
}