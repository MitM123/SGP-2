import React from 'react'
import { IoMdAdd } from 'react-icons/io';
import { useState, useEffect } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { addTeam, getTeams } from '../../Helper/Helper';
import toast from 'react-hot-toast';
import Global from '../../Utils/Global';


const Teams = () => {

    const [open, setOpen] = React.useState(false);
    const [teams, setTeams] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        getTeams().then(teams => {
            setTeams(teams);
            setLoaded(true);
        })
    }, [])

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: async values => {
            values = await Object.assign(values);
            const tId = toast.loading("Adding...");
            let addTeamPromise = addTeam(values);

            addTeamPromise.then(() => {
                toast.success("Team added successfully...", {
                    id: tId
                })
                // setTeams([...teams]);
                setOpen(false);
            }).catch(err => {
                toast.error(err.error, {
                    id: tId
                })
            })
        }
    })

    return (
        loaded === false ? (
            <>
                Loading Teams
                <button className='text-white bg-blue-950 p-3 rounded-lg w-30 font-poppins font-semibold  flex flex-row  gap-1 justify-center items-center'>
                    <IoMdAdd size={20} />
                    AddTeam
                </button >
            </>
        ) : (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-end mr-4 items-center h-[10vh]  '>
                        <React.Fragment>
                            <button className='text-white bg-blue-950 p-3 rounded-md w-30 font-poppins font-semibold  flex flex-row items-center gap-1'
                                onClick={() => { setOpen(true) }}>
                                <IoMdAdd size={20} />
                                AddTeam
                            </button >
                            <Modal open={open}>
                                <form onSubmit={formik.handleSubmit}>
                                    <ModalDialog sx={{ width: '30%', height: '22%', padding: '0' }}>
                                        <div className='flex items-center justify-end  cursor-pointer m-3'>
                                            <AiOutlineClose color='black' size={20} onClick={() => { setOpen(false); }} />
                                        </div>
                                        <div className='w-[95%] ml-2'>
                                            <label htmlFor="text" ></label>
                                            <input type="text" id='text' name='text' {...formik.getFieldProps('name')} required placeholder='Enter team name' className='outline-none w-full text-black font-Jost placeholder:text-lg placeholder:font-Jost uppercase p-3 rounded-lg bg-slate-200' />
                                        </div>
                                        <div className='flex justify-end w-full'>
                                            <button className=' text-white mr-3 bg-primary-color text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-28 font-semibold '>
                                                Confirm
                                            </button>
                                        </div>
                                    </ModalDialog>
                                </form>
                            </Modal>
                        </React.Fragment>
                    </div >
                    <div className='grid gap-4 ml-4 mr-4 grid-cols-5 mt-2 h-[30vh]'>
                        {
                            teams.map((team) => (
                                <Link key={team.sis_id} to={team.name.toLowerCase()} className='h-20 rounded-md flex items-center justify-center bg-gray-200 font-Outfit text-xl '>
                                    {team.name.toUpperCase()}
                                </Link>
                            ))
                        }

                    </div>
                </div >
            </>
        )
    )
}

export default Teams
