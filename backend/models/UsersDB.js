const userSchema = mongoose.Schema(
    {
        // USER PERSONAL INFO
        // # WILL ADD AUTHENTICATION (PASSWORD) LATER # 
        firstname: {
            type: String,
            required: [true, 'Please enter your firstname']
        },
        lastname: {
            type: String,
            required: [true, 'Please enter your lastname']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email']
        },
        birthdate: {
            type: Date,
            required: [true, 'Please enter your birthdate']
        },
        //PROFILE INFO
        gamertag: {
            type: String,
            required: true 
        },
        profileimg: {
            type: Image,
        },
        status: {
            type: Boolean,
            required: true
        },
        aboutme: {
            type: String,
        },
        // USER STATS
        gamertag: {
            type: String,
            required: true 
        },
        gamertag: {
            type: String,
            required: true 
        },
        gamertag: {
            type: String,
            required: true 
        },
        gamertag: {
            type: String,
            required: true 
        },
        gamertag: {
            type: String,
            required: true 
        },

        


















    }, 
    {
    timestamps: true,
    }
)