const mongoose = require('mongoose')
const userStatsSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Users'
        },
        // USER STATS
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
            Bronze: {
                type: Boolean
            }, 
            Silver: {
                type: Boolean
            }, 
            Gold: {
                type: Boolean
            }, 
            Platinum: {
                type: Boolean
            },
            Diamond: {
                type: Boolean
            }, 
            Master: {
                type: Boolean
            }, 
            Predator: {
                type: Boolean
            }, 
        },
        skilllevel: {
            Beginner: {
                type: Boolean
            }, 
            Average: {
                type: Boolean
            }, 
            Experienced: {
                type: Boolean
            }, 
            Seasoned: {
                type: Boolean
            },  
        },
        playstyle: {
            Passive: {
                type: Boolean
            }, 
            Defensive: {
                type: Boolean
            }, 
            Assault: {
                type: Boolean
            }, 
        }, 
        avgdamge: {
            "~400": {
                type: Boolean
            }, 
            "~600": {
                type: Boolean
            }, 
            "~800": {
                type: Boolean
            }, 
            "+1000": {
                type: Boolean
            },  
        }, 
        kdratio: {
            "~1.00": {
                type: Boolean
            }, 
            "~1.50": {
                type: Boolean
            }, 
            "~2.00": {
                type: Boolean
            }, 
            "~3.00": {
                type: Boolean
            },  
            "~4.00": {
                type: Boolean
            },  
            "+5.00": {
                type: Boolean
            },  
        }
    }, 
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('UserStats', userStatsSchema)





