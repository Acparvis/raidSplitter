const genRaidinfo = (players, category) => {
  const raidAttendees = players.filter((player) => player.category === category);
  console.log(raidAttendees)

  const attendeeStrings = raidAttendees.map((attendee) => attendee.name)

  // attendeeStrings = attendeeStrings.replace(',', '\n');

  console.log(attendeeStrings);

  const message = `
  ${category.charAt(0).toUpperCase() + category.slice(1)}
  ${attendeeStrings.join('\n')}
  `


  return message;
}

export default genRaidinfo;