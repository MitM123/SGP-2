import React from 'react'
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { AiOutlineClose } from "react-icons/ai";
import Toss from './Toss';

const MatchDetails = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <React.Fragment>
                <button onClick={() => setOpen(true)} className=' text-white bg-primary-color text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-32 font-semibold '>
                    Start match
                </button>
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
                                    setOpen(false);
                                }} />
                            </div>
                        </div>
                        <div className='flex h-80 flex-col w-[95%] m-2 '>
                            {/* <form action=''> */}
                                <h1 className='flex justify-center font-Rubik font-semibold'>Match Details</h1>
                                <div className='w-full mt-2 grid grid-cols-2 gap-x-2  justify-evenly'>
                                    <input type='number' placeholder='No.of Overs' required className='shadow-md outline-none p-2  rounded-md' />
                                    <input type='number' placeholder='Overs per Bowler' required className='outline-none shadow-md p-2  rounded-md' />
                                    <input type='number' placeholder='Powerplay Over' required className='outline-none mt-2 shadow-md p-2 rounded-md' />
                                </div>
                                <div className='w-full mt-3 flex justify-end'>
                                    <Toss />
                                </div>
                            {/* </form> */}
                        </div>
                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </>
    )
}

export default MatchDetails
