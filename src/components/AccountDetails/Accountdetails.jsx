import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import Global from '../../Utils/Global';
// import { Link } from 'react-router-dom';
import { RiInboxArchiveFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Confirmation from './Confirmation';
import { uploadimage } from '../../Helper/Helper';
import { toast } from 'sonner';



const Accountdetails = (props) => {

  
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async () => {
    console.log("file",file)
    const formData = new FormData();
    formData.append('image', file);

    const tId = toast.loading("Loading in...")
    try {
      console.log("formdata is->",formData)
      let uploadimagePromise = uploadimage(formData);
      uploadimagePromise.then(_ => {
        toast.success("Password change Successfully", {
          id: tId
        })
      }).catch(err => {
        toast.error(err, { id: tId })
      })
    } catch (e) {
      toast.error("Something went wrong...", { id: tId })
      console.log(e)
    }
  }



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
          <ModalDialog sx={{ width: '30%', height: '67%', padding: '0', '@media(max-width:680px)': { height: '57%' }, '@media(max-width:440px)': { height: '50%',width:'30%' }, '@media(max-width:380px)': { height: '60%',width:'30%' } }}>
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
                <img
                  className="mx-auto h-24 rounded-full block sm:mx-0 sm:shrink-0"
                  src={file ? file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU"}
                  alt="Face"
                />
              </div>
              {/* <label class="text-sm text-gray-400 flex justify-center font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Picture</label> */}
              <div class="w-full flex flex-row gap-x-3 items-center mt-2 mb-2">
                <input id="picture" type="file" class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                  onChange={handleChange}
                />
                <button className=' text-white bg-primary-color text-lg font-Outfit items-center flex  justify-center p-1 rounded-lg w-20 font-semibold '
                  onClick={handleUpload}>
                  Upload
                </button>
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
