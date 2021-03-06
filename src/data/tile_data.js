export const PLANET_TRAITS = {
    "HAZARDOUS": 0,
    "INDUSTRIAL": 1,
    "CULTURAL": 2,
};

export const TECH_SPECIALTIES = {
    "BIOTIC": 0,
    "WARFARE": 1,
    "PROPULSION": 2,
    "CYBERNETIC": 3,
};

export const ANOMALIES = {
    "NEBULA": 0,
    "GRAVITY_RIFT": 1,
    "ASTEROID_FIELD": 2,
    "SUPERNOVA": 3,
};

export const WORMHOLES = {
    "ALPHA": 0,
    "BETA": 1,
    "DELTA": 2,
};

export let planet_data = [
    {
        "name": "Mecatol Rex",
        "trait": null,
        "tech_specialty": null,
        "resources": 1,
        "influence": 6,
    },
    {
        "name": "Abyz",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Fria",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Arinam",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": null,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Meer",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
        "resources": 0,
        "influence": 4,
    },
    {
        "name": "Arnor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": null,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Lor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": null,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Bereg",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Lirta IV",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Centauri",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Gral",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Corneeq",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Resculon",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Dal Bootha",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Xxehan",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Lazar",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Sakulag",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Lodor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": null,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Mehar Xull",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Mellon",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Zohbat",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "New Albion",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Starpoint",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Quann",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Qucen'n",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": null,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Rarron",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Saudor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": null,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Tar'Mann",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Tequ'ran",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Torkan",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": null,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Thibah",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Vefut II",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": null,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Wellon",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
        "resources": 1,
        "influence": 2,
    },

];

export let system_data = [
    {
        "id": 18,
        "planets": ["Mecatol Rex"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 39,
        "planets": [],
        "anomaly": null,
        "wormhole": WORMHOLES.ALPHA
    },
    {
        "id": 43,
        "planets": [],
        "anomaly": ANOMALIES.SUPERNOVA,
        "wormhole": null
    },
    {
        "id": 46,
        "planets": [],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 49,
        "planets": [],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 44,
        "planets": [],
        "anomaly": ANOMALIES.ASTEROID_FIELD,
        "wormhole": null
    },
    {
        "id": 40,
        "planets": [],
        "anomaly": null,
        "wormhole": WORMHOLES.BETA
    },
    {
        "id": 48,
        "planets": [],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 45,
        "planets": [],
        "anomaly": ANOMALIES.ASTEROID_FIELD,
        "wormhole": null
    },
    {
        "id": 47,
        "planets": [],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 42,
        "planets": [],
        "anomaly": ANOMALIES.NEBULA,
        "wormhole": null
    },
    {
        "id": 50,
        "planets": [],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 41,
        "planets": [],
        "anomaly": ANOMALIES.GRAVITY_RIFT,
        "wormhole": null
    },
    {
        "id": 32,
        "planets": ["Dal Bootha", "Xxehan"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 26,
        "planets": ["Lodor"],
        "anomaly": null,
        "wormhole": WORMHOLES.ALPHA
    },
    {
        "id": 29,
        "planets": ["Qucen'n", "Rarron"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 38,
        "planets": ["Abyz", "Fria"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 22,
        "planets": ["Tar'Mann"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 21,
        "planets": ["Thibah"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 33,
        "planets": ["Corneeq", "Resculon"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 19,
        "planets": ["Wellon"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 28,
        "planets": ["Tequ'ran", "Torkan"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 24,
        "planets": ["Mehar Xull"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 37,
        "planets": ["Arinam", "Meer"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 30,
        "planets": ["Mellon", "Zohbat"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 20,
        "planets": ["Vefut II"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 27,
        "planets": ["New Albion", "Starpoint"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 23,
        "planets": ["Saudor"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 31,
        "planets": ["Lazar", "Sakulag"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 35,
        "planets": ["Bereg", "Lirta IV"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 34,
        "planets": ["Centauri", "Gral"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 36,
        "planets": ["Arnor", "Lor"],
        "anomaly": null,
        "wormhole": null
    },
    {
        "id": 25,
        "planets": ["Quann"],
        "anomaly": null,
        "wormhole": WORMHOLES.BETA
    },
];

