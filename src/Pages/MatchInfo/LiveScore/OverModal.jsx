import React, { useContext, useState } from 'react'
import { LiveScoreContext } from '../LiveScore';
import {Modal,ModalDialog} from '@mui/joy';
import { AiOutlineClose } from "react-icons/ai";

const OverModal = ({ open }) => {
    const context = useContext(LiveScoreContext);
    const [overDetails, setOverDetails] = useState({
        overs: 0,
        overPerBowler: 0,
        powerPlayOvers: 0,
    });

    const handleButton = () => {
        context.setOverDetails(overDetails);
        context.setModal("toss");
    }
    return (
        <>
            <Modal open={open} >
                <ModalDialog sx={{ width: '30%', height: '45%', padding: '0', '@media(max-width:680px)': { height: '23%' }, '@media(max-width:420px)': { height: '33%' } }}>
                    <div className='h-14 flex justify-between  bg-primary-color'>
                        <div className='flex  h-full items-center gap-x-5  ml-3 text-white font-Jost'>
                            <div className='text-xl'>
                                {/* {teamNames[0].toUpperCase()} */}
                                CSPIT-CE
                            </div>
                            <div>
                                VS
                            </div>
                            <div className='text-xl'>
                                CSPIT-IT
                                {/* {teamNames[1].toUpperCase()} */}
                            </div>
                        </div>

                        <div className='flex items-center mr-3 cursor-pointer'>
                            <AiOutlineClose color='white' size={25} onClick={(event) => {
                                event.preventDefault();
                                context.closeModal(false);
                            }} />
                        </div>
                    </div>
                    <div className='flex h-80 flex-col w-[95%] m-2 '>
                        {/* <form action=''> */}
                        <h1 className='flex justify-center font-Rubik font-semibold'>Match Details</h1>
                        <div className='w-full mt-2 grid grid-cols-2 gap-x-2  justify-evenly'>
                            <input type='number' placeholder='No.of Overs' required className='shadow-md outline-none p-2  rounded-md' onClick={e => console.log(e)} />
                            {/* <input type='number' placeholder='No.of Overs' required className='shadow-md outline-none p-2  rounded-md' onClick={e => setOverDetails({overs: e.target.})} /> */}
                            <input type='number' placeholder='Overs per Bowler' required className='outline-none shadow-md p-2  rounded-md' />
                            <input type='number' placeholder='Powerplay Over' required className='outline-none mt-2 shadow-md p-2 rounded-md' />
                        </div>
                        <button onClick={handleButton} className='text-white bg-emerald-500 text-lg font-Outfit items-center flex  justify-center p-1 rounded-lg w-28 '>NEXT(Toss)</button>
                        {/* </form> */}
                    </div>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default OverModal