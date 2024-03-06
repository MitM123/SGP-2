import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../App';
import Loader from '../../Components/Loader/Loader';
import { getPlayers } from '../../Helper/Helper';

const Team = () => {
  const { teamId } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [players, setPlayers] = useState([]);
  const context = React.useContext(Context);

  useEffect(() => {
    if (!context.team) {
      setLoaded(true);
    } else {
      setTimeout(() => {
        getPlayers(teamId, { selectedPlayers: false }).then(players => {
          setPlayers(players);
          setLoaded(true);
        }).catch(err => {
          console.log(err);
        })
      }, 1000)
    }
  }, [teamId])

  return (
    <>
      {context.team ?
        !loaded ?
          <>
            <Loader />
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
          </>
        :
        <></>
      }
    </>
  )
}

export default Team