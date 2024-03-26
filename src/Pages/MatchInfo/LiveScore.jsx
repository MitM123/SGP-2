import React from 'react'
import Global from '../../Utils/Global'
import { useState } from 'react'
import VS_IMG from '../../assets/VS.png'
import Error401 from '../Errors/Error401'
import { LuUndo2 } from "react-icons/lu";
import Loader from '../../Components/Loader/Loader';
import { Modal, Box, Typography } from '@mui/material'

const LiveScore = () => {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const zeroRun = () => {
    
  }

  return (

    !Global.isSportsHead() ?
      <Error401 />
      :
      <>

        {/* context.match && */}
        <div className='h-[91vh] flex flex-row w-full bg-neutral-300'>
          <div className='flex w-1/2 items-center flex-col mt-10'>
            <div className='flex flex-row gap-x-20 items-center mb-5'>
              <div className=''>
                <div className='flex text-3xl font-bold font-poppins'>
                  {/* {match.team1Runs}/{match.team1Wickets} */}
                  0/0
                </div>
                <div className='text-sm font-poppins font-extralight'>
                  {/* <p>{ballsToOvers(match.team1Balls)} OVERS</p> */}
                  <p>12 OVERS</p>
                </div>
                <div className='text-xl font-semibold'>
                  {/* {Global.matches[matchId].team1.name.toUpperCase()} */}
                  CSPIT-CE
                </div>
              </div>
              <div>
                <img src={VS_IMG} alt='No' className='h-32 w-32' />
              </div>
              <div>
                <div className='flex text-3xl font-bold font-poppins'>
                  {/* {match.team2Runs}/{match.team2Wickets} */}
                  0/0
                </div>
                <div className='text-sm font-extralight font-poppins'>
                  {/* <p>{ballsToOvers(match.team2Balls)} OVERS</p> */}
                  <p>10 OVERS</p>
                </div>
                <div className='text-xl font-semibold'>
                  {/* {Global.matches[matchId].team2.name.toUpperCase()} */}
                  CSPIT-IT
                </div>
              </div>
            </div>
            <div className='bg-black h-px w-[80%]'></div>
            <div>
              <p className='mt-2 font-Outfit font-semibold'>CSPIT-CE NEED 14 RUNS TO WIN</p>
            </div>
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
            <div className='w-[94%] gap-x-4 flex flex-row h-[12vh] mt-10 ml-5 mr-5 items-center justify-center rounded-md p-2'>
              <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-green-400'>6</h1>
              <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>1</h1>
              <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-red-400'>OUT</h1>
              <h1 className='w-12 rounded-full flex justify-center items-center h-12 bg-white'>WD</h1>
              <h1 className='w-12 rounded-full flex justify-center items-center h-12  bg-blue-400'>4</h1>
            </div>
            <div className='w-[94%] grid grid-cols-6 font-poppins gap-4 h-[30vh] mt-10 ml-5 mr-5 font-semibold'>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md  shadow-lg'>0</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>1</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>2</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg ' onClick={handleOpen}>WD</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>NB</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>LB</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>3</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>4</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>6</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg'>BYE</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg col-start-5 col-span-2'>OUT</button>
              <button className='flex bg-slate-600 text-white h-16 justify-center items-center rounded-md shadow-lg flex-row gap-x-1'> <LuUndo2 size={15} /> UNDO</button>
            </div>
          </div>
        </div>
      </>


  )
}

export default LiveScore
