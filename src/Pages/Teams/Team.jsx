import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPlayers, getTeam } from '../../Helper/Helper';
import TeamNavigation from './TeamNavigation';
import Global from '../../Utils/Global';

const Team = () => {
  const { teamId } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [players, setPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    getTeam(teamId).then(team => {
      setTeamName(team.name.toUpperCase());
      getPlayers(teamId, {selectedPlayers: false}).then(players => {
        setPlayers(players);
        setLoaded(true);
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    })
  }, [teamId])

  return (
    <>
      <TeamNavigation teamName={teamName} deptCC={Global.user.roles.includes("DEPT_SPORTS_CC")} />
      {!loaded ?
        <>
          Loading players...
        </>
        :
        <>
          <h1>Team</h1>
          <p>Team id: {teamId}</p>
          <ul>
            {players.map(player => (
              <li key={player.sis_id}>{player.user.name}</li>
            ))}
          </ul>
        </>}
    </>
  )
}

export default Team