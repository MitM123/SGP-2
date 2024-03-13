import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import Global from '../../Utils/Global';
// import { Link } from 'react-router-dom';
import { RiInboxArchiveFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';


const Accountdetails = (props) => {

  const [open, setOpen] = React.useState(false);
  return (
    <>
      <React.Fragment>
        <Link to='/inbox'>
          <RiInboxArchiveFill color='white' size={30} className='hover:cursor-pointer' />
        </Link>
        <button
          onClick={() => {
            setOpen(true)
          }}
        >
          <GoPerson color='white' size={30} className='hover:cursor-pointer' />
        </button>
        <Modal open={open} >
          <ModalDialog sx={{ width: '30%', height: '65%', padding: '0', '@media(max-width:680px)': { height: '43%' }, '@media(max-width:420px)': { height: '53%' } }}>
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
            <div className='flex h-80 flex-col w-[95%] ml-2 '>
              <div className='w-full flex justify-center'>
                <img class="mx-auto h-24 rounded-full block sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
              </div>
              <div className='h-14 w-full p-2 flex  rounded-md text-black text-lg font-Outfit items-center'>
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
