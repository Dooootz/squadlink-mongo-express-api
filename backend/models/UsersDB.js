// # WILL ADD AUTHENTICATION (PASSWORD) LATER # 
// this db table / document could be split into 2 seperate documents 
const userSchema = mongoose.Schema(
    {
        // USER PERSONAL INFO
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
    }, 
    {
    timestamps: true,
    }
)


