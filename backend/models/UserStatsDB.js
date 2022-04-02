const mongoose = require('mongoose')
const userStatsSchema = mongoose.Schema(
    {
        // USER STATS
        // _id: 
        mainlegend: {
            Ash: {
                type: Boolean
            },
            Bangalore: {
                type: Boolean
            },
            Bloodhound: {
                type: Boolean
            },
            Caustic: {
                type: Boolean
            },
            Crypto: {
                type: Boolean
            },
            Fuse: {
                type: Boolean
            },
            Gibraltar: {
                type: Boolean
            },
            Horizon: {
                type: Boolean
            },
            Lifeline: {
                type: Boolean
            },
            Loba: {
                type: Boolean
            },
            Maggie: {
                type: Boolean
            },
            Mirage: {
                type: Boolean
            },
            Octane: {
                type: Boolean
            },
            Pathfinder: {
                type: Boolean
            },
            Rampart: {
                type: Boolean
            },
            Revenant: {
                type: Boolean
            },
            Seer: {
                type: Boolean
            },
            Valkyrie: {
                type: Boolean
            },
            Wattson: {
                type: Boolean
            },
            Wraith: {
                type: Boolean
            },
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

module.exports = mongoose.model('UserStats', userStatsSchema)




        // // USER STATS
        // mainlegend: {
        //     Ash: true,
        //     Bangalore: false,
        //     Bloodhound: false,
        //     Caustic: false,
        //     Crypto: false,
        //     Fuse: false,
        //     Gibraltar: false,
        //     Horizon: false,
        //     Lifeline: false,
        //     Loba: false,
        //     Maggie: false,
        //     Mirage: false,
        //     Octane: false,
        //     Pathfinder: false,
        //     Rampart: false,
        //     Revenant: false,
        //     Seer: false,
        //     Valkyrie: false,
        //     Wattson: false,
        //     Wraith: false,
        // },
        // ranklevel: {
        //     Bronze4: true, 
        //     Bronze3: false, 
        //     Bronze2: false, 
        //     Bronze1: false, 
        //     Silver4: false, 
        //     Silver3: false, 
        //     Silver2: false, 
        //     Silver1: false, 
        //     Gold4: false, 
        //     Gold3: false, 
        //     Gold2: false, 
        //     Gold1: false, 
        //     Platinum4: false, 
        //     Platinum3: false, 
        //     Platinum2: false, 
        //     Platinum1: false, 
        //     Diamond4: false, 
        //     Diamond3: false, 
        //     Diamond2: false, 
        //     Diamond1: false, 
        //     Master: false, 
        //     Predator: false, 
        // },
        // skilllevel: {
        //     Beginner: true, 
        //     Average: false, 
        //     Experienced: false, 
        //     Seasoned: false,  
        // },
        // playstyle: {
        //     Passive: true, 
        //     Defensive: false, 
        //     Assault: false, 
        // }, 
        // avgdamge: {
        //     "~400": true, 
        //     "~600": false, 
        //     "~800": false, 
        //     "+1000": false,  
        // }, 
        // kdratio: {
        //     "~1.00": true, 
        //     "~1.50": false, 
        //     "~2.00": false, 
        //     "~2.50": false,  
        //     "~3.00": false,  
        //     "~4.00": false,  
        //     "+5.00": false,  
        // }
