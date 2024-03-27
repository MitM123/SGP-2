import React, { useContext } from 'react';
import { Modal, ModalDialog } from '@mui/joy';
import { AiOutlineClose } from "react-icons/ai";
import { ScorePanelContext } from './ScorePanel';

const InvalidBallRuns = ({ open }) => {
    const context = useContext(ScorePanelContext);
    const handleButton = (event) => {
        event.preventDefault();
        context.handleInvalidBallRuns();
        context.closeModal();
    }
    return (
        <>
            <Modal open={open} >
                <ModalDialog sx={{ width: '27%', height: '20%', padding: '0', '@media(max-width:680px)': { height: '10%' }, '@media(max-width:420px)': { height: '13%' } }}>
                    <div className='h-14 flex justify-between  bg-primary-color'>
                        <div className='flex  h-full p-2 items-center ml-3 text-white text-2xl font-Jost'>
                            {context.heading} Runs
                        </div>
                        <div className='flex items-center mr-3 cursor-pointer'>
                            <AiOutlineClose color='white' size={25} onClick={(event) => {
                                event.preventDefault();
                                context.closeModal();
                            }} />
                        </div>
                    </div>
                    <div className='flex h-40 flex-row gap-x-2 justify-center font-poppins items-center ml-2 '>
                        <p className='text-2xl'>1</p>
                        <p className='text-2xl'>+</p>
                        <input className='w-10 outline-none pl-2 pr-2 border-2 text-2xl border-black rounded-md'
                            value={context.invalidBallRuns}
                            onChange={e => {
                                if (e.target.value < 1)
                                    context.setInvalidBallRuns(0)
                                else
                                    context.setInvalidBallRuns(Number(e.target.value))
                            }}
                        />
                        <p className='text-2xl'>=</p>
                        <p className='text-2xl'>{1 + context.invalidBallRuns}</p>
                        <button className=' text-white bg-primary-color ml-5 text-lg font-Outfit items-center flex  justify-center p-1 rounded-lg w-20 font-semibold' onClick={handleButton}>
                            Confirm
                        </button>
                    </div>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default InvalidBallRuns