import React from 'react'
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Global from '../../Utils/Global';
import { GoPerson } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
// import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';

const Accountdetails = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <React.Fragment>
        <button
          onClick={() => {
            console.log("data is", Global.user)
            setOpen(true)
          }}
        >
          <GoPerson color='white' size={30} className='hover:cursor-pointer' />
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog sx={{ width: '30%', height: '50%', padding: '0' }}>
            <div className='h-14 flex justify-between  bg-primary-color'>
              <div className='flex  h-full items-center ml-3 text-white text-2xl font-Jost'>
                Account Details
              </div>
              <div className='flex items-center mr-3 cursor-pointer'>
                <AiOutlineClose color='white' size={25} onClick={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }} />
              </div>
            </div>
            <div className='flex h-80 flex-col w-[95%] m-2 '>
              <div className='h-14 w-full p-2 flex shadow-inner rounded-md text-black text-lg font-Outfit items-center'>
                {Global.user.name}
              </div>
              <div className='h-14 w-full p-2 flex shadow-inner rounded-md text-black text-lg font-Outfit  items-center'>
                {Global.user.email}
              </div>
              <div className='h-14 w-full p-2 flex shadow-inner rounded-md text-black text-lg font-Outfit   items-center'>
                {Global.user.userId}
              </div>
              <div className='h-14'></div>
              <div className='w-full flex justify-center'>
                <Confirmation />
              </div>
            </div>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </>
  )
}

export default Accountdetails
