import React, { createContext, useContext, useEffect, useState } from 'react';
import { LuUndo2 } from "react-icons/lu";
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../App';
import { getBattingTeamId, getBowlingTeamId, getOver, setMatch } from '../../../Helper/Helper';
import Global from '../../../Utils/Global';
import InvalidBallRuns from './InvalidBallRuns';
import WicketModal from './WicketModal';
import NextBowler from './NextBowler';

export const ScorePanelContext = createContext()

const ScorePanel = () => {
  const appContext = useContext(AppContext);

  const { matchId } = useParams();

  const [invalidBallRuns, setInvalidBallRuns] = useState(0);
  const [heading, setHeading] = useState("");
  const [upcomingBatsman, setUpcomingBatsman] = useState(null); // new striker after wicket fall
  const [eliminatedPlayer, setEliminatedPlayer] = useState(null);
  const [nextBowler, setNextBowler] = useState(null);
  const [ballType, setBallType] = useState(null);

  const [runs, setRuns] = useState(0);

  const [upcomingStrikers, setUpcomingStrikers] = useState(null);
  const [upcomingBowlers, setUpcomingBowlers] = useState(null);

  const [wicketType, setWicketType] = useState(null);

  const [modal, setModal] = useState("");

  const closeModal = () => {
    setModal("");
  }

  const modals = {
    "invalidBallRuns": <InvalidBallRuns open={modal === "invalidBallRuns" ? true : false} />,
    "wicket": <WicketModal open={modal === "wicket" ? true : false} closeModal={closeModal} upcomingStrikers={upcomingStrikers} />,
    "nextBowler": <NextBowler open={modal === "nextBowler" ? true : false} closeModal={closeModal} upcomingBowlers={upcomingBowlers} ballType={ballType} />
  }

  const handleRuns = (ballType) => {
    setRuns(preRuns => {
      if (appContext.currentOver.validBalls === 6) {
        const bowlingTeamId = getBowlingTeamId(appContext.match);
        Global.httpGet(`/teams/${bowlingTeamId}/bowlersscore/${matchId}`, false).then(res => {
          setUpcomingBowlers(res.data.bowlers);
          setRuns(preRuns);
          setBallType(ballType);
          setModal("nextBowler");
        })
      }
      else {
        Global.httpPut('/matches/runs/' + matchId, { runs: ballType !== "NORMAL" ? (1 + preRuns) : preRuns, ballType }, true)
          .then(res => {
            console.log(res);
            setMatch(appContext, matchId);
          })
          .catch(error => {
            console.log(error);
          });
        return preRuns;
      }
    });
  }

  const outBatsman = () => {
    Global.httpPut('/matches/wicket/' + matchId, { wicketType, upcomingBatsmanId: upcomingBatsman, eliminatedPlayerId: eliminatedPlayer }, true).then(res => {
      console.log(res);
      setMatch(appContext, matchId);
    })
  }

  const openWicketModal = () => {
    const battingTeamId = getBattingTeamId(appContext.match);
    Global.httpGet(`teams/${battingTeamId}/battersscore/${matchId}`, false).then(res => {
      setUpcomingStrikers(res.data.batters.filter(p => !p.out && p.playerId !== appContext.strikerScore.playerId && p.playerId !== appContext.nonStrikerScore.playerId));
      setModal("wicket");
    })
  }

  useEffect(() => {
    console.log(appContext)
    getOver(appContext.currentOver.sis_id).then(over => {
      console.log(over)
    })
  }, [])

  const openNextBowlerModal = () => {
    // get
    setModal("nextBowler");
  }

  return (
    <>
      {
        appContext.match &&
        <ScorePanelContext.Provider value={{
          upcomingBatsman, setUpcomingBatsman,
          modal, setModal, closeModal,
          invalidBallRuns, setInvalidBallRuns, handleRuns,
          wicketType, setWicketType,
          heading, setHeading,
          eliminatedPlayer, setEliminatedPlayer,
          upcomingStrikers, setUpcomingStrikers,
          runs, setRuns,
          nextBowler, setNextBowler,
          outBatsman,
        }}>
          {modals[modal]}

          <div className='w-[94%] gap-x-4 flex flex-row h-[12vh] mt-10 ml-5 mr-5 items-center justify-center rounded-md p-2'>
            {
              appContext.currentOver.balls.map((ball, i) => {
                if (ball.wicket)
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12 bg-red-400'>OUT</h1>);
                else if (ball.ballType === "WIDE")
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>WD{ball.runs}</h1>)
                else if (ball.ballType === "NO_BALL")
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>NB{ball.runs}</h1>)
                else if (ball.ballType === "LEG_BYE")
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>LB{ball.runs}</h1>)
                else if (ball.ballType === "BYE")
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>BYE{ball.runs}</h1>)
                else if (ball.runs === 6)
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12 bg-green-400'>6</h1>)
                else if (ball.runs === 4)
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12  bg-blue-400'>4</h1>)
                else
                  return (<h1 key={i} className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>{ball.runs}</h1>)
              })
            }
          </div>

          {/* <div className='w-[94%] gap-x-4 flex flex-row h-[12vh] mt-10 ml-5 mr-5 items-center justify-center rounded-md p-2'>
            <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-green-400'>6</h1>
            <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>1</h1>
            <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-red-400'>OUT</h1>
            <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>WD</h1>
            <h1 className='w-12 rounded-full flex justify-center items-center h-12  bg-blue-400'>4</h1>
          </div> */}
          <div className='w-[94%] grid grid-cols-6 font-poppins gap-4 h-[40vh] mt-10 ml-5 mr-5 font-semibold'>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md  shadow-lg' onClick={() => { setRuns(0); handleRuns("NORMAL"); }}>0</button>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setRuns(1); handleRuns("NORMAL"); }}>1</button>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setRuns(2); handleRuns("NORMAL"); }}>2</button>

            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setModal("invalidBallRuns"); setHeading("Wide") }}>WD</button>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setModal("invalidBallRuns"); setHeading("No Ball") }}>NB</button>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setModal("invalidBallRuns"); setHeading("Leg Bye") }}>LB</button>

            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setRuns(3); handleRuns("NORMAL"); }}>3</button>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setRuns(4); handleRuns("NORMAL"); }}>4</button>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setRuns(6); handleRuns("NORMAL"); }}>6</button>

            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setModal("invalidBallRuns"); setHeading("Bye") }}>BYE</button>

            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg col-start-5 col-span-2' onClick={openWicketModal}>OUT</button>
            <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg flex-row gap-x-1'> <LuUndo2 size={15} /> UNDO</button>
          </div>
        </ScorePanelContext.Provider>
      }
    </>
  )
}

export default ScorePanel