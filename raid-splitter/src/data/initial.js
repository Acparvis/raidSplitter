const initState = {
  players: [
    {
      id: 1,
      name: 'Parvy',
      category: "benched",
      characterClass: 2,
      role: 2,
      note: "",
      itemPrio: [],
      alts: [],
      isSkinner: true,
    },
    {
      id: 2,
      name: 'Rhinan',
      category: "benched",
      characterClass: 8,
      role: 0,
      note: "Big daddy",
      itemPrio: [],
      alts: [],
      isSkinner: false,
    },
    {
      id: 3,
      name: 'Klingspor',
      category: "benched",
      characterClass: 4,
      role: 3,
      note: "Heal daddy",
      itemPrio: [],
      alts: [],
      isSkinner: false,

    },
    {
      id: 4,
      name: 'Tankus',
      category: "benched",
      characterClass: 8,
      role: 1,
      note: "Bad warrior",
      itemPrio: [],
      alts: [ "Parvy" ],
      isSkinner: false,

    },
  ]
}


export default initState;