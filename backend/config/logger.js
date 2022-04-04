// import functions from winston
const {
    createLogger,
    transports,
    format 
} = require('winston');

// instantiate wiston 
const winston = require('winston')

require('winston-mongodb');

// create our log structure
const userLogs = createLogger({
    // transport our log to our devlopment file
    transports: [
        new winston.transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json()),
        }),
        // transport our logs to our mongoDB Schema
        new winston.transports.MongoDB({
            level:'info',
            // pull mongo url from environment variables
            db: process.env.MONGO_URI,
            // reference the 'logs' collection
            collection: 'logs',
            format: format.combine(format.timestamp(), format.json()),
        })
    ]

})

// export our logs to our server.js
module.exports = userLogs




















// deprecated ?
// ---  --- --- --- --- --- --- ---

// const winston = require('winston')

// const logFormatter = (params) => {
//     return `${params.timestamp} [${params.level}] ${params.message}` 
// }

// const createLogger = () => {
//     winston.addColors({
//         error: 'red',
//         warn: 'darkred',
//         info: 'cyan',
//         debug: 'gray'
//     })

//     return winston.createLogger({
//         level: 'info',
//         format: winston.format.json(),
//         defaultMeta: { service: "http-api"},
//         transports: [
//             new winston.transports.Console({
//                 format: winston.format.combine(
//                     winston.format.colorize(),
//                     winston.format.timestamp(),
//                     winston.format.splat(),
//                     winston.format.printf(logFormatter)
//                 )
//             })
//         ]
//     })
// }


// module.exports = {
//     logFormatter,
//     logger: createLogger()
// }

// ---  --- --- --- --- --- --- ---
// var winston = require('winston');

// /**
//  * Requiring `winston-mongodb` will expose
//  * `winston.transports.MongoDB`
//  */
// require('winston-mongodb');

// winston.add(new winston.transports.MongoDB(

// ));
// ---  --- --- --- --- --- --- ---

