import React, { createContext, useContext, useEffect, useState } from 'react'
import Global from '../../Utils/Global'
import Error401 from '../Errors/Error401'
import { useParams } from 'react-router-dom';
import MatchSummary from './MatchSummary';
import { getMatch } from '../../Helper/Helper';
import Loader from '../../Components/Loader/Loader';
import OverModal from './LiveScore/OverModal';
import StrikerBowlerModal from './LiveScore/StrikerBowlerModal';
import TossModal from './LiveScore/TossModal';
import InvalidBallRuns from './LiveScore/InvalidBallRuns';
import ScorePanel from './LiveScore/ScorePanel';

export const LiveScoreContext = createContext();

const LiveScore = () => {
  const { matchId } = useParams();
  const [match, setMatch] = useState();
  const [loaded, setLoaded] = useState(false);
  const [overDetails, setOverDetails] = useState();
  const [tossDetails, setTossDetails] = useState();
  const [strikerBowlerDetails, setStrikerBowlerDetails] = useState();
  const [modal, setModal] = useState("");

  const modals = {
    "overs": <OverModal open={modal === "overs" ? true : false} />,
    "strikerBowler": <StrikerBowlerModal open={modal === "strikerBowler" ? true : false} />,
    "toss": <TossModal open={modal === "toss" ? true : false} />,
  }

  useEffect(() => {
    getMatch(matchId).then(match => {
      setLoaded(true);
      setMatch(match);
      if (!match.played)
        setModal("overs");
    }).catch((e) => {
      setLoaded(true);
      console.log(e);
    })
  }, [])

  const closeModal = () => {
    setModal("");
  }

  const startMatch = () => {
    Global.httpPut(`/matches/${matchId}/start/`, {}, true).then(res => {
      console.log(res);
    })
  }

  return (
    <>
      {
        !Global.isSportsHead() ?
          <Error401 />
          :
          !loaded ?
            <Loader />
            :
            <LiveScoreContext.Provider value={{ setOverDetails, setTossDetails, setStrikerBowlerDetails, setModal, startMatch, closeModal }}>
              <div className='h-[91vh] flex flex-row w-full bg-neutral-300'>
                <div className='flex w-1/2 items-center flex-col mt-10'>
                  <MatchSummary match={match} />
                  {/* <div className='bg-black h-px w-[80%]'></div>
                <div>
                  <p className='mt-2 font-Outfit font-semibold'>CSPIT-CE NEED 14 RUNS TO WIN</p>
                </div> */}
                  <div className='flex flex-row w-full justify-around h-56 items-center'>
                    <div className=''>
                      <h1 className='text-xl font-Rubik mb-3'>CSPIT-CE Batting</h1>
                      <p className='text-lg font-poppins font-semibold'>M Mit: 17* (20)</p>
                      <p className='text-lg font-poppins font-semibold'>M Jalay: 18* (21)</p>
                    </div>
                    <div>
                      <h1 className='text-xl font-Rubik mb-3'>CSPIT-IT Bowling</h1>
                      <p className='text-lg font-poppins font-semibold'>M Mit: 0/12(2.0)</p>
                      <p className='text-lg font-poppins font-semibold'>M Jalay: 1/10 (3.2)</p>
                    </div>
                  </div>
                </div>
                <div className='w-1/2 bg-neutral-300'>

                  {
                    !match.played &&
                    <div className='w-full p-3 flex justify-end'>
                      {modals[modal]}
                    </div>
                  }

                  {
                    match.played && <ScorePanel/>
                  }
                </div>

              </div>
            </LiveScoreContext.Provider>
      }
    </>
  )
}

export default LiveScore