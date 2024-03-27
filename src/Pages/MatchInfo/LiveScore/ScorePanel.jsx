import React, { createContext, useContext, useState } from 'react';
import { LiveScoreContext } from '../LiveScore';
import Global from '../../../Utils/Global';
import { useParams } from 'react-router-dom';
import InvalidBallRuns from './InvalidBallRuns';
import WicketModal from './WicketModal';
import { LuUndo2 } from "react-icons/lu";

export const ScorePanelContext = createContext()

const ScorePanel = () => {
  const { matchId } = useParams();

  const [invalidBallRuns, setInvalidBallRuns] = useState(0);
  const [heading, setHeading] = useState("");
  const [newStriker, setNewStriker] = useState(null); // new striker after wicket fall
  const [validBallRuns, setValidBallRuns] = useState(0);
  const [invalidBallType, setInvalidBallType] = useState("");

  const [modal, setModal] = useState("");

  const closeModal = () => {
    setModal("");
  }

  const modals = {
    "invalidBallRuns": <InvalidBallRuns open={modal === "invalidBallRuns" ? true : false} />,
    "wicket": <WicketModal open={modal === "wicket" ? true : false} closeModal={closeModal} />,
  }

  const handleValidBallRuns = () => {
    setValidBallRuns(prevValidBallRuns => {
      Global.httpPut('/matches/runs/' + matchId, { runs: prevValidBallRuns, validBall: true }, true)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.error(error);
        });
      return prevValidBallRuns;
    });
  }

  // runs on invalid ball
  const handleInvalidBallRuns = () => {
    setInvalidBallRuns(prevInvalidBallRuns => {
      Global.httpPut('/matches/runs/' + matchId, { runs: 1 + prevInvalidBallRuns, validBall: false, invalidBallType }, true)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.error(error);
        });
      return prevInvalidBallRuns;
    });
  }

  const outBatsman = () => {
    Global.httpPut('/matches/wicket/' + matchId, { striker: newStriker }, true).then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <ScorePanelContext.Provider value={{ setNewStriker, setModal, outBatsman, setInvalidBallRuns, closeModal, handleInvalidBallRuns, invalidBallRuns, heading }}>
        {modals[modal]}
        <div className='w-[94%] gap-x-4 flex flex-row h-[12vh] mt-10 ml-5 mr-5 items-center justify-center rounded-md p-2'>
          <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-green-400'>6</h1>
          <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>1</h1>
          <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-red-400'>OUT</h1>
          <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>WD</h1>
          <h1 className='w-12 rounded-full flex justify-center items-center h-12  bg-blue-400'>4</h1>
        </div>
        <div className='w-[94%] grid grid-cols-6 font-poppins gap-4 h-[40vh] mt-10 ml-5 mr-5 font-semibold'>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md  shadow-lg' onClick={() => { setValidBallRuns(0); handleValidBallRuns(); }}>0</button>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setValidBallRuns(1); handleValidBallRuns(); }}>1</button>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setValidBallRuns(2); handleValidBallRuns(); }}>2</button>

          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setInvalidBallType("wide"); setModal("invalidBallRuns"); setHeading("Wide") }}>WD</button>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setInvalidBallType("no_ball"); setModal("invalidBallRuns"); setHeading("No Ball") }}>NB</button>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setInvalidBallType("leg_bye"); setModal("invalidBallRuns"); setHeading("Leg Bye") }}>LB</button>

          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setValidBallRuns(3); handleValidBallRuns(); }}>3</button>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setValidBallRuns(4); handleValidBallRuns(); }}>4</button>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setValidBallRuns(6); handleValidBallRuns(); }}>6</button>

          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg' onClick={() => { setInvalidBallType("bye"); setModal("invalidBallRuns"); setHeading("Bye") }}>BYE</button>

          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg col-start-5 col-span-2' onClick={() => {setModal("wicket"); outBatsman();}}>OUT</button>
          <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg flex-row gap-x-1'> <LuUndo2 size={15} /> UNDO</button>
        </div>
      </ScorePanelContext.Provider>
    </>
  )
}

export default ScorePanel