import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../App';
import Global from '../../Utils/Global';
import Error401 from '../Errors/Error401';
import OverModal from './LiveScore/OverModal';
import ScorePanel from './LiveScore/ScorePanel';
import StrikerBowlerModal from './LiveScore/StrikerBowlerModal';
import TossModal from './LiveScore/TossModal';
import MatchSummary from './MatchSummary';
import { ballsToOvers } from '../../Helper/Helper';

export const LiveScoreContext = createContext();

const LiveScore = () => {

  const appContext = useContext(AppContext);

  const { matchId } = useParams();
  const [strikerScore, setStrikerScore] = useState();
  const [nonStrikerScore, setNonStrikerScore] = useState();

  const [overDetails, setOverDetails] = useState({
    overs: 0,
    overPerBowler: 0,
    powerPlayOvers: 0,
  });
  const [tossDetails, setTossDetails] = useState({
    tossWonByTeamId: "",
    tossDecision: "",
  });
  const [strikerBowlerDetails, setStrikerBowlerDetails] = useState({
    strikerId: "",
    nonStrikerId: "",
    bowlerId: ""
  })

  const [modal, setModal] = useState("");

  const modals = {
    "overs": <OverModal open={modal === "overs" ? true : false} />,
    "strikerBowler": <StrikerBowlerModal open={modal === "strikerBowler" ? true : false} />,
    "toss": <TossModal open={modal === "toss" ? true : false} />,
  }

  const closeModal = () => {
    setModal("");
  }

  const startMatch = () => {
    console.log(tossDetails)
    Global.httpPut(`/matches/${matchId}/start/`, { ...overDetails, ...tossDetails, ...strikerBowlerDetails }, true).then(res => {
      console.log(res);
    })
  }

  return (
    <>
      {
        !Global.isSportsHead() ?
          <Error401 />
          :
          appContext.match &&
          <LiveScoreContext.Provider value={{ setStrikerScore, setNonStrikerScore, setOverDetails, setTossDetails, setStrikerBowlerDetails, setModal, startMatch, closeModal, tossDetails, strikerBowlerDetails, strikerScore, nonStrikerScore }}>
            <div className='h-[91vh] flex flex-row w-full bg-neutral-300'>
              <div className='flex w-1/2 items-center flex-col mt-10'>
                <MatchSummary />
                {/* <div className='bg-black h-px w-[80%]'></div>
                <div>
                  <p className='mt-2 font-Outfit font-semibold'>CSPIT-CE NEED 14 RUNS TO WIN</p>
                </div> */}
                <div className='flex flex-row w-full justify-around h-56 items-center'>
                  {
                    appContext.match.played ?
                      <>
                        <div className=''>
                          <h1 className='text-xl font-Rubik mb-3'>{appContext.battingTeamScore.team.name.toUpperCase()} Batting</h1>
                          <p className='text-lg font-poppins font-semibold'>{appContext.strikerScore.player.user.name}: {appContext.strikerScore.runs}* ({appContext.strikerScore.balls})</p>
                          <p className='text-lg font-poppins font-semibold'>{appContext.nonStrikerScore.player.user.name}: {appContext.nonStrikerScore.runs} ({appContext.nonStrikerScore.balls})</p>
                        </div>
                        <div>
                          <h1 className='text-xl font-Rubik mb-3'>{appContext.bowlingTeamScore.team.name.toUpperCase()} Bowling</h1>
                          {console.log(appContext.bowlerScore.wickets)}
                          <p className='text-lg font-poppins font-semibold'>{appContext.bowlerScore.player.user.name}: {appContext.bowlerScore.wickets}/{appContext.bowlerScore.runs}({ballsToOvers(appContext.bowlerScore.balls)})</p>
                          {/* <p className='text-lg font-poppins font-semibold'>M Jalay: 1/10 (3.2)</p> */}
                        </div>
                      </>
                      :
                      <>
                        <div>
                          <h1 className='text-xl font-Rubik mb-3'>Match hasn't started yet!</h1>
                        </div>
                      </>
                  }
                </div>
              </div>
              <div className='w-1/2 bg-neutral-300'>

                {
                  !appContext.match.played &&
                  <>
                    <div className='w-full p-3 flex justify-end'>
                      {modals[modal]}
                    </div>
                    <button onClick={() => setModal("overs")} className=' text-white bg-primary-color text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-32 font-semibold '>
                      Start match
                    </button>
                  </>
                }

                {
                  appContext.match.played && <ScorePanel />
                }
              </div>

            </div>
          </LiveScoreContext.Provider>
      }
    </>
  )
}

export default LiveScore