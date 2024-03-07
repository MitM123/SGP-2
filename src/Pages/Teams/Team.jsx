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
            {/* <h1>Team</h1>
            <p>Team id: {teamId}</p>
            <ul>
              {players.map(player => (
                <li key={player.sis_id}>{player.user.name}</li>
              ))}
            </ul> */}


            <div className=' flex flex-col'>
              <div className=' grid gap-4 ml-10 mr-10 grid-cols-3 mt-10 h-[30vh]'>
                {
                  players.map(players => {
                    return (
                      <div class="py-8 px-8 w-full h-36 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
                        <div class="text-center space-y-2 sm:text-left">
                          <div class="space-y-0.5">
                            <p class="text-lg text-black font-semibold">
                              {players.user.name}
                            </p>
                            <p class="text-slate-500 font-medium">
                              All Rounder
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </>
        :
        <></>
      }
    </>
  )
}

export default Team