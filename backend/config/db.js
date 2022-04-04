const mongoose = require('mongoose')

// async function pulls our mongoDB URL from our .env variables. Basic security practice that hides sensitive dev data
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    // catch & log errors
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

// export our function to /server,js
module.exports = connectDB