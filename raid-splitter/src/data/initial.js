const initState = {
  players: [
    {
      "id": 1,
      "name": "Parvy",
      "category": "raid3",
      "characterClass": 2,
      "role": 2,
      "note": "",
      "itemPrio": [],
      "alts": [],
      "isSkinner": true,
      "itemReservation": []
    },
    {
      "id": 2,
      "name": "Rhinan",
      "category": "raid2",
      "characterClass": 8,
      "role": 0,
      "note": "Big daddy",
      "itemPrio": [],
      "alts": [],
      "isSkinner": false,
      "itemReservation": []
    },
    {
      "id": 3,
      "name": "Klingspor",
      "category": "raid2",
      "characterClass": 4,
      "role": 3,
      "note": "Heal daddy",
      "itemPrio": [],
      "alts": [],
      "isSkinner": false,
      "itemReservation": []
    },
    {
      "id": 4,
      "name": "Tankus",
      "category": "raid2",
      "characterClass": 8,
      "role": 2,
      "note": "Bad warrior",
      "itemPrio": [],
      "alts": [
        "Parvy"
      ],
      "isSkinner": false,
      "itemReservation": []
    },
    {
      "name": "Thazard",
      "characterClass": 2,
      "role": 2,
      "alts": [
        "Rhinan"
      ],
      "category": "raid3",
      "id": 5,
      "isSkinner": false
    },
    {
      "name": "Isarma",
      "characterClass": 8,
      "role": 0,
      "alts": [],
      "category": "raid3",
      "id": 6,
      "isSkinner": false
    },
    {
      "name": "Crazh",
      "characterClass": 8,
      "role": 2,
      "category": "raid2",
      "id": 7,
      "isSkinner": false
    },
    {
      "name": "Crashbaby",
      "characterClass": 8,
      "role": 0,
      "alts": [
        "Crazh"
      ],
      "category": "raid1",
      "id": 8,
      "isSkinner": false
    },
    {
      "name": "Halcon",
      "characterClass": 0,
      "alts": [],
      "role": 0,
      "category": "raid3",
      "id": 9,
      "isSkinner": false
    },
    {
      "name": "Jan",
      "characterClass": 1,
      "role": 2,
      "category": "raid3",
      "id": 10,
      "isSkinner": false
    },
    {
      "name": "Karvapallo",
      "characterClass": 1,
      "role": 2,
      "category": "raid2",
      "id": 11,
      "isSkinner": false
    },
    {
      "name": "Dôug",
      "characterClass": 1,
      "role": 2,
      "category": "benched",
      "id": 12,
      "isSkinner": false
    },
    {
      "name": "Chickun",
      "characterClass": 0,
      "role": 3,
      "isSkinner": [
        true
      ],
      "itemReservation": [],
      "category": "raid2",
      "id": 13
    },
    {
      "name": "Yuka",
      "characterClass": 8,
      "role": 2,
      "itemReservation": [],
      "category": "raid1",
      "id": 14,
      "isSkinner": false
    },
    {
      "name": "Manakuski",
      "characterClass": 8,
      "role": 2,
      "category": "raid3",
      "id": 15,
      "isSkinner": false
    },
    {
      "name": "Branded",
      "characterClass": 8,
      "role": 2,
      "itemReservation": [],
      "category": "raid1",
      "id": 16,
      "isSkinner": false
    },
    {
      "name": "Midgarth",
      "characterClass": 8,
      "role": 2,
      "itemReservation": [],
      "category": "benched",
      "id": 17,
      "isSkinner": false
    },
    {
      "name": "Stonedsky",
      "characterClass": 8,
      "role": 2,
      "category": "raid3",
      "id": 18,
      "isSkinner": false
    },
    {
      "name": "Xixolina",
      "characterClass": 8,
      "role": 2,
      "category": "benched",
      "id": 19,
      "isSkinner": false
    },
    {
      "name": "Lamarc",
      "characterClass": 2,
      "role": 2,
      "category": "raid2",
      "id": 20,
      "isSkinner": false
    },
    {
      "name": "Dajmkryss",
      "characterClass": 2,
      "role": 2,
      "category": "raid1",
      "id": 21,
      "isSkinner": false
    },
    {
      "name": "Dangfart",
      "characterClass": 2,
      "role": 2,
      "category": "benched",
      "id": 22,
      "isSkinner": false
    },
    {
      "name": "Zilyo",
      "characterClass": 2,
      "role": 2,
      "category": "raid3",
      "id": 23,
      "isSkinner": false
    },
    {
      "name": "Regron",
      "characterClass": 2,
      "role": 2,
      "category": "benched",
      "id": 24,
      "isSkinner": false
    },
    {
      "name": "Bielenberg",
      "characterClass": 2,
      "role": 2,
      "category": "benched",
      "id": 25,
      "isSkinner": false
    },
    {
      "name": "BogdaniusFit",
      "characterClass": 2,
      "role": 2,
      "category": "benched",
      "id": 26,
      "isSkinner": false
    },
    {
      "name": "Zyfo",
      "characterClass": 2,
      "role": 2,
      "category": "benched",
      "id": 27,
      "isSkinner": false
    },
    {
      "name": "Pagangroove",
      "characterClass": 6,
      "role": 3,
      "category": "raid2",
      "id": 28,
      "isSkinner": false
    },
    {
      "name": "Usoop",
      "characterClass": 6,
      "role": 3,
      "category": "raid1",
      "id": 29,
      "isSkinner": false
    },
    {
      "name": "Kasun",
      "characterClass": 6,
      "role": 3,
      "category": "raid3",
      "id": 30,
      "isSkinner": false
    },
    {
      "name": "Döhbner",
      "characterClass": 6,
      "role": 2,
      "category": "benched",
      "id": 31,
      "isSkinner": false
    },
    {
      "name": "Pvpman",
      "characterClass": 5,
      "role": 2,
      "category": "benched",
      "id": 32,
      "isSkinner": false
    },
    {
      "name": "Sofly",
      "characterClass": 4,
      "role": 3,
      "category": "raid1",
      "id": 33,
      "isSkinner": false,
      "alts": [
        "Soshy",
        "Thunderfly"
      ]
    },
    {
      "name": "Strriike",
      "characterClass": 5,
      "role": 2,
      "category": "raid3",
      "id": 34,
      "isSkinner": false
    },
    {
      "name": "Rufuz",
      "characterClass": 5,
      "role": 2,
      "isSkinner": [
        true
      ],
      "category": "raid1",
      "id": 35
    },
    {
      "name": "Dóri",
      "characterClass": 7,
      "role": 2,
      "category": "raid3",
      "id": 36,
      "isSkinner": false
    },
    {
      "name": "Drinken",
      "characterClass": 7,
      "role": 2,
      "category": "raid1",
      "id": 37,
      "isSkinner": false
    },
    {
      "name": "Orcwarlock",
      "characterClass": 7,
      "role": 2,
      "category": "benched",
      "id": 38,
      "isSkinner": false
    },
    {
      "name": "Sondre",
      "characterClass": 4,
      "role": 3,
      "category": "raid3",
      "id": 39,
      "isSkinner": false
    },
    {
      "name": "Sundgrung",
      "characterClass": 4,
      "role": 2,
      "category": "raid1",
      "id": 40,
      "isSkinner": false
    },
    {
      "name": "Neez",
      "characterClass": 4,
      "role": 3,
      "category": "benched",
      "id": 41,
      "isSkinner": false
    },
    {
      "name": "Zulia",
      "characterClass": 4,
      "role": 3,
      "category": "raid2",
      "id": 42,
      "isSkinner": false
    },
    {
      "name": "Neeze",
      "characterClass": 0,
      "role": 3,
      "alts": [
        "Neez"
      ],
      "category": "benched",
      "id": 43,
      "isSkinner": false
    },
    {
      "name": "Naggz",
      "characterClass": 8,
      "alts": [
        "Döhbner"
      ],
      "role": 2,
      "category": "raid3",
      "id": 44,
      "isSkinner": false
    },
    {
      "name": "Movmakr",
      "characterClass": 7,
      "role": 2,
      "alts": [
        "Döhbner",
        "Naggz"
      ],
      "category": "benched",
      "id": 45,
      "isSkinner": false
    },
    {
      "name": "Syleck",
      "characterClass": 2,
      "role": 2,
      "alts": [
        "Döhbner",
        "Naggz",
        "Movmakr"
      ],
      "category": "raid2",
      "id": 46,
      "isSkinner": false
    },
    {
      "name": "Gutspiller",
      "characterClass": 4,
      "role": 3,
      "alts": [
        "Döhbner",
        "Naggz",
        "Movmakr",
        "Syleck"
      ],
      "category": "raid1",
      "id": 47,
      "isSkinner": false
    },
    {
      "name": "Laviolas",
      "characterClass": 8,
      "role": 2,
      "alts": [
        "BogdaniusFit"
      ],
      "category": "benched",
      "id": 48,
      "isSkinner": false
    },
    {
      "name": "Erdetvilas",
      "characterClass": 2,
      "alts": [
        "Strriike"
      ],
      "role": 2,
      "category": "raid1",
      "id": 49,
      "isSkinner": false
    },
    {
      "name": "Stonedskys",
      "characterClass": 1,
      "role": 2,
      "alts": [
        "Stonedsky"
      ],
      "category": "benched",
      "id": 50,
      "isSkinner": false
    },
    {
      "name": "Gromgut",
      "characterClass": 1,
      "role": 2,
      "alts": [],
      "category": "benched",
      "id": 51,
      "isSkinner": false
    },
    {
      "characterClass": 2,
      "role": 2,
      "name": "Frostbaal",
      "alts": [
        "Gromgut"
      ],
      "category": "benched",
      "id": 52,
      "isSkinner": false
    },
    {
      "name": "Coglemore",
      "characterClass": 8,
      "role": 2,
      "alts": [
        "Orcwarlock"
      ],
      "category": "benched",
      "id": 53,
      "isSkinner": false
    },
    {
      "name": "Unitz",
      "characterClass": 2,
      "role": 2,
      "alts": [
        "Yuka"
      ],
      "category": "raid2",
      "id": 54,
      "isSkinner": false
    },
    {
      "name": "Zilance",
      "characterClass": 6,
      "role": 3,
      "alts": [
        "Zilyo"
      ],
      "category": "benched",
      "id": 55,
      "isSkinner": false
    },
    {
      "name": "Soshy",
      "characterClass": 2,
      "role": 2,
      "alts": [],
      "category": "raid3",
      "id": 56,
      "isSkinner": false
    },
    {
      "name": "Thunderfly",
      "characterClass": 5,
      "role": 2,
      "category": "raid2",
      "id": 57,
      "isSkinner": false,
      "alts": [
        "Sofly",
        "Soshy"
      ]
    },
    {
      "name": "Hoffy",
      "characterClass": 5,
      "role": 2,
      "alts": [
        "Isarma"
      ],
      "category": "raid2",
      "id": 58,
      "isSkinner": false
    },
    {
      "name": "Goldgucci",
      "characterClass": 2,
      "role": 2,
      "alts": [
        "Parvy",
        "Tankus"
      ],
      "category": "raid1",
      "id": 59,
      "isSkinner": false
    },
    {
      "name": "Usoopnation",
      "characterClass": 2,
      "role": 2,
      "alts": [
        "Usoop"
      ],
      "category": "raid2",
      "id": 60,
      "isSkinner": false
    },
    {
      "name": "Kerosh",
      "characterClass": 8,
      "role": 2,
      "alts": [
        "Kasun"
      ],
      "category": "raid2",
      "id": 61,
      "isSkinner": false
    },
    {
      "name": "Ironfeather",
      "characterClass": 1,
      "role": 2,
      "alts": [
        "Midgarth"
      ],
      "category": "benched",
      "id": 62,
      "isSkinner": false
    },
    {
      "name": "Olahalvorsen",
      "characterClass": 5,
      "role": 2,
      "alts": [
        "Dangfart"
      ],
      "category": "benched",
      "id": 63,
      "isSkinner": false
    },
    {
      "name": "Dìe",
      "characterClass": 2,
      "role": 2,
      "alts": [
        "Rufuz"
      ],
      "category": "raid3",
      "id": 64,
      "isSkinner": false
    },
    {
      "name": "Frostitutê",
      "characterClass": 2,
      "role": 2,
      "alts": [
        "Sondre"
      ],
      "category": "benched",
      "id": 65,
      "isSkinner": false
    },
    {
      "name": "Nitte",
      "characterClass": 8,
      "role": 2,
      "category": "raid1",
      "id": 66,
      "isSkinner": false
    },
    {
      "name": "Rampart",
      "characterClass": 8,
      "role": 2,
      "category": "raid2",
      "id": 67,
      "isSkinner": false
    },
    {
      "name": "Skream",
      "characterClass": 5,
      "role": 2,
      "category": "raid1",
      "id": 68,
      "isSkinner": false
    },
    {
      "name": "Dagonhai",
      "characterClass": 7,
      "role": 2,
      "category": "raid1",
      "id": 69,
      "isSkinner": false
    },
    {
      "name": "Bawser",
      "characterClass": 1,
      "role": 2,
      "alts": [
        "Crazh"
      ],
      "category": "raid1",
      "id": 70,
      "isSkinner": false
    },
    {
      "alts": [
        "Halcon"
      ],
      "name": "Locvst",
      "characterClass": 7,
      "role": 2,
      "category": "raid2",
      "id": 71,
      "isSkinner": false
    },
    {
      "alts": [
        "Klingspor"
      ],
      "name": "Seekhyjal",
      "characterClass": 6,
      "role": 3,
      "category": "raid3",
      "id": 72,
      "isSkinner": false
    }
  ]
}


export default initState;
