import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import React, { useContext, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { LiveScoreContext } from '../LiveScore';

const SelectStriker = ({open}) => {
    const context = useContext(LiveScoreContext);
    const [data, setData] = useState({
        strikerId: "",
        nonStrikerId: "",
        bowlerId: ""
    })
    const handleButton = () => {
        context.setData(data);
        context.startMatch();
    }
    return (
        <>
            <React.Fragment>
                <Modal open={open} >
                    <ModalDialog sx={{ width: '30%', height: '67%', padding: '0', '@media(max-width:680px)': { height: '45%' }, '@media(max-width:420px)': { height: '55%' } }}>
                        <div className='h-14 flex justify-between '>
                            <div className='flex  h-full items-center ml-3 text-black text-xl font-Jost'>
                                Batting - CSPIT-CE
                            </div>
                            <div className='flex items-center mr-3 cursor-pointer'>
                                <AiOutlineClose color='black' size={25} onClick={(event) => {
                                    event.preventDefault();
                                    context.closeModal(false);
                                }} />
                            </div>
                        </div>
                        <div className='flex h-80 flex-col w-[95%] ml-2 gap-y-2 '>
                            <div className='w-full flex justify-evenly'>
                                <button className=' text-black bg-slate-300 text-lg  font-Outfit items-center flex  justify-center p-2 rounded-lg w-36 h-24 font-semibold '>
                                    Select Sriker
                                </button>
                                <button className=' text-black bg-slate-300 text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-36 h-24 font-semibold '>
                                    Select Non-striker
                                </button>
                            </div>
                            <div className='w-full'>
                                <div className='flex  h-14 items-center ml-1 text-black text-xl font-Jost'>
                                    Bowling - CSPIT-IT
                                </div>
                                <div className='w-full flex '>
                                    <button className=' text-black bg-slate-300 text-lg ml-6      font-Outfit items-center flex flex-col  justify-center p-2 rounded-lg w-36 h-32  font-semibold'>
                                        Select Bowler
                                    </button>
                                </div>

                                <div className='w-full mt-3 flex justify-end'>
                                    <button className='text-white bg-emerald-500 text-md   font-Outfit items-center flex  justify-center p-2 rounded-lg w-36 '>START SCORING</button>
                                </div>

                            </div>
                        </div>
                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </>
    )
}

export default SelectStriker
