import React from 'react'
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Global from '../../Utils/Global';


const Confirmation = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    
    const logoutHandler = (event) => {
        event.preventDefault();
        Global.httpPut("/auth/logout").then(data => {
            Global.user = null;
            Global.token = null;
            navigate('/');
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div>
            <React.Fragment>
                <button className=' text-white bg-primary-color text-lg font-Outfit items-center flex gap-1 justify-center p-2 rounded-lg w-28 font-semibold flex-row'
                    onClick={() => setOpen(true)} >
                    <FaArrowLeftLong />
                    Logout
                </button>
                <Modal keepMounted open={open} >
                    <ModalDialog sx={{ width: '30%', height: '20%', }}>
                        <div>
                            <div className='text-xl font-Jost text-black'>
                                Are you sure you want to log out?
                            </div>
                            <div className='flex flex-row justify-end gap-4 mt-3'>

                                <button className='text-black bg-slate-200 text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-24 font-semibold'
                                    onClick={() => setOpen(false)}>
                                    Cancel
                                </button>
                                <button className=' text-white bg-primary-color text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-24 font-semibold '
                                    onClick={logoutHandler}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </div>
    )
}

export default Confirmation
