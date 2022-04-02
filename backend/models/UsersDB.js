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

        // USER STATS
        mainlegend: {
            Ash: true,
            Bangalore: false,
            Bloodhound: false,
            Caustic: false,
            Crypto: false,
            Fuse: false,
            Gibraltar: false,
            Horizon: false,
            Lifeline: false,
            Loba: false,
            Maggie: false,
            Mirage: false,
            Octane: false,
            Pathfinder: false,
            Rampart: false,
            Revenant: false,
            Seer: false,
            Valkyrie: false,
            Wattson: false,
            Wraith: false,
        },
        ranklevel: {
            Bronze4: true, 
            Bronze3: false, 
            Bronze2: false, 
            Bronze1: false, 
            Silver4: false, 
            Silver3: false, 
            Silver2: false, 
            Silver1: false, 
            Gold4: false, 
            Gold3: false, 
            Gold2: false, 
            Gold1: false, 
            Platinum4: false, 
            Platinum3: false, 
            Platinum2: false, 
            Platinum1: false, 
            Diamond4: false, 
            Diamond3: false, 
            Diamond2: false, 
            Diamond1: false, 
            Master: false, 
            Predator: false, 
        },
        skilllevel: {
            Beginner: true, 
            Average: false, 
            Experienced: false, 
            Seasoned: false,  
        },
        playstyle: {
            Passive: true, 
            Defensive: false, 
            Assault: false, 
        }, 
        avgdamge: {
            "~400": true, 
            "~600": false, 
            "~800": false, 
            "+1000": false,  
        }, 
        kdratio: {
            "~1.00": true, 
            "~1.50": false, 
            "~2.00": false, 
            "~2.50": false,  
            "~3.00": false,  
            "~4.00": false,  
            "+5.00": false,  
        }



        


















    }, 
    {
    timestamps: true,
    }
)