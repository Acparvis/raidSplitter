import React from "react";

const genRaidinfo = (players, category) => {
  const raidAttendees = players.filter((player) => player.category === category);
  const attendeeStrings = raidAttendees.sort((a, b) => (a.role > b.role) ? 1 : -1).map((attendee) => attendee.name)

  const message =
    <>
      <h1 className="raid-info-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="raid-info-container">
        <aside>
          <h3 className={"font-bold"}>Roster</h3>
          {attendeeStrings.map((attendee) => <p>{attendee}</p>)}
        </aside>
        <aside>
          <h3 className={"font-bold"}>Invite macro</h3>
          {attendeeStrings.map((attendee) => <p>/invite {attendee}</p>)}
        </aside>
      </div>
    </>

  return message;
}

export default genRaidinfo;