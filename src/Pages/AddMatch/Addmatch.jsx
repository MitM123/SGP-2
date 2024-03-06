import { Option, Select } from '@mui/joy';
import { renderTimeViewClock } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { addMatch, getTeams } from '../../Helper/Helper';
import '../AddMatch/Addmatch.css';

const Addmatch = () => {

    const navigate = useNavigate();

    const [teams, setTeams] = React.useState([]);

    useEffect(() => {
        getTeams().then(teams => {
            setTeams(teams);
        })
    }, [])


    const dateTimeHandler = (dateTime) => {
        formik.setFieldValue('date', dateTime);
    }

    const formik = useFormik({
        initialValues: {
            team1Id: "",
            team2Id: "",
            date: "",
        },
        onSubmit: async values => {
            values = await Object.assign(values);
            const tId = toast.loading("Adding match...");
            let addMatchPromise = addMatch(values);

            addMatchPromise.then(() => {
                toast.success("Match added successfully...", {
                    id: tId
                })
                navigate("/home")
            }).catch(err => {
                toast.error(err, {
                    id: tId
                })
            })
        }
    })

    return (

        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className=' addmatch1 w-full h-[90vh] font-poppins flex justify-center items-center'>
                    <div className='addmatch2 w-[24%]  h-full  flex flex-col items-center justify-center gap-y-2'>
                        <h1 className='text-2xl'>ADD MATCHES</h1>
                        <Select
                            name='team1Id'
                            onChange={((_, teamId) => formik.setFieldValue("team1Id", teamId))}
                            placeholder="Select First Team"
                            sx={{ width: '100%', padding: 1 }}
                            slotProps={{
                                listbox: {
                                    placement: 'bottom-start',
                                },
                            }}
                        >
                            {
                                teams.map(team => {
                                    return (
                                        <Option value={team.sis_id} key={team.sis_id}>
                                            {team.name}
                                        </Option>
                                    )
                                })
                            }
                        </Select>
                        <h2>VS</h2>
                        <Select
                            name='team2Id'
                            onChange={((_, teamId) => formik.setFieldValue("team2Id", teamId))}
                            placeholder="Select Second Team"
                            sx={{ width: '100%', padding: 1 }}
                            slotProps={{
                                listbox: {
                                    placement: 'bottom-start',
                                },
                            }}
                        >
                            {
                                teams.map(team => {
                                    return (
                                        <Option value={team.sis_id} key={team.sis_id}>
                                            {team.name}
                                        </Option>
                                    )
                                })
                            }
                        </Select>
                        <div className='flex flex-row items-center justify-center w-full gap-x-3 mt-2'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateTimePicker']} sx={{ width: '100%' }}>
                                    <DateTimePicker
                                        label="Select Date and Time"
                                        onChange={dateTimeHandler}
                                        viewRenderers={{
                                            hours: renderTimeViewClock,
                                            minutes: renderTimeViewClock,
                                            seconds: renderTimeViewClock,
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>

                        <button className='flex items-center justify-center bg-primary-color w-full font-semibold p-2 rounded-lg mt-2 text-white gap-x-2 hover:bg-sky-400 hover:text-black  hover:border-black'  >
                            Create Match
                            <FaArrowRight size={20} />
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Addmatch
