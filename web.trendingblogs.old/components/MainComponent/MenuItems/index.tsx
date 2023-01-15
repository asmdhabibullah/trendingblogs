// Tranding Blog's Total Grid 5
import { classes } from "../../Utils/Enums";

// 4 XL
const TRENDING = {
    "classData": classes.TRENDING,
    "title": "Trending",
    "categories": [
        {
            "Last Hour": "lasthour"
        },
        {
            "Today": "today"
        },
        {
            "Last three days": "lastthreedays"
        },
        {
            "Last week": "lastweek"
        },
        {
            "Last Month": "lastmonth"
        }
    ]
};

const HEALTH = {
    "classData": classes.HEALTH,
    "title": "Health News",
    "categories": [
        {
            "Kids": "kids"
        },
        {
            "Old": "old"
        },
        {
            "Men": "men"
        },
        {
            "Women": "women"
        },
        {
            "Adult": "adult"
        }
    ]
};

const TRAVEL = {
    "classData": classes.TRAVEL,
    "title": "Travel News",
    "categories": [
        {
            "Destination": "destination"
        },
        // {
        //     "Flight": "flight"
        // },
        {
            "Local Transportation": "localtransportation"
        },
        {
            "Hotel": "hotel"
        },
        {
            "Food": "food"
        },
        {
            "Culture & Activity": "cultureactivity"
        }
    ]
};

const LIFESTYLE = {
    "classData": classes.LIFESTYLE,
    "title": "Lifestyle News",
    "categories": [
        {
            "Fashion": "fashion"
        },
        {
            "Beauty": "beauty"
        },
        {
            "Yoga": "yoga"
        },
        {
            "Fitness": "fitness"
        },
        {
            "Music": "music"
        }
    ]
};

const TECHNOLOGY = {
    "classData": classes.TECHNOLOGY,
    "title": "Technology News",
    "categories": [
        {
            "AI": "ai."
        },
        {
            "Apps": "apps"
        },
        {
            "Gaming": "gaming"
        },
        {
            "Cryptocurrency": "cryptocurrency"
        },
        {
            "Tech More": "techmore"
        }
    ]
}

const GRID_4XL = [
    {
        "classData": classes.TRENDING,
        "title": "Trending",
        "categories": [
            {
                "Last Hour": "lasthour"
            },
            {
                "Today": "today"
            },
            {
                "Last Three days": "lastthreedays"
            },
            {
                "Last week": "lastweek"
            },
            {
                "Last Month": "lastmonth"
            }
        ]
    },
    {
        "classData": classes.HEALTH,
        "title": "Health News",
        "categories": [
            {
                "Kids": "kids"
            },
            {
                "Old": "old"
            },
            {
                "Men": "men"
            },
            {
                "Women": "women"
            },
            {
                "Adult": "adult"
            }
        ]
    },
    {
        "classData": classes.TRAVEL,
        "title": "Travel News",
        "categories": [
            {
                "Destination": "destination"
            },
            // {
            //     "Flight": "flight"
            // },
            {
                "Local Transportation": "localtransportation"
            },
            {
                "Hotel": "hotel"
            },
            {
                "Food": "food"
            },
            {
                "Culture & Activity": "cultureactivity"
            }
        ]
    },
    {
        "classData": classes.LIFESTYLE,
        "title": "Lifestyle News",
        "categories": [
            {
                "Fashion": "fashion"
            },
            {
                "Beauty": "beauty"
            },
            {
                "Yoga": "yoga"
            },
            {
                "Fitness": "fitness"
            },
            {
                "Music": "music"
            }
        ]
    },
    {
        "classData": classes.TECHNOLOGY,
        "title": "Technology News",
        "categories": [
            {
                "AI": "ai."
            },
            {
                "Apps": "apps"
            },
            {
                "Gaming": "gaming"
            },
            {
                "Cryptocurrency": "cryptocurrency"
            },
            {
                "Tech More": "techmore"
            }
        ]
    }
];

// Just XL
const GRID_XL = [
    {
        "classData": "technology",
        "title": "Technology News",
        "categories": [
            {
                "AI": "ai."
            },
            {
                "Apps": "apps"
            },
            {
                "Gaming": "gaming"
            },
            {
                "Cryptocurrency": "cryptocurrency"
            },
            {
                "Tech More": "techmore"
            }
        ]
    }
];

export const MenuItems = () => {
    return {
        // GRID_4XL,
        // GRID_XL,
        TRENDING,
        HEALTH,
        TRAVEL,
        LIFESTYLE,
        TECHNOLOGY
    }
};

