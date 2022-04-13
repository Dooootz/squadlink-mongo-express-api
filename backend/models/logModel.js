const mongoose = require('mongoose')
const storeLogsSchema = new mongoose.Schema(
    {
        timeStamp: {
            type: Date,
            required: true,
        },
        reqMethod: {
            type: String,
            required: true,
        },
        reqPath: {
            type: String,
            required: true,
        },
        userIP: {
            type: String,
            required: true,
        },
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('StoreLogs', storeLogsSchema)