import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { FaArrowRight } from "react-icons/fa6";
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Option } from '@mui/joy';
import { renderTimeViewClock } from '@mui/x-date-pickers';
import { Select } from '@mui/joy';
import dayjs from 'dayjs';
import '../AddMatch/Addmatch.css'

const Addmatch = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        team1: "",
        team2: "",
        date: "",
        time: "",
    });

    const handleinput = (event) => {
        console.log(event.target);
        const { name, value } = event.target
        setData(prevdata => {
            console.log(prevdata)
            return {
                ...prevdata,
                [name]: value,

            }
        })
        console.log(data)
    }

    const dateTimeHandler = (dateTime) => {
        const date = dayjs(dateTime).format('DD/MM/YYYY');
        const time = dayjs(dateTime).format('HH:mm  ');
        setData(prevData => ({
            ...prevData,
            date: date,
            time: time
        }));
        console.log(dateTime)
    }

    // useEffect(() => {
    //     localStorage.setItem("data",JSON.stringify(data));
    // }, [data])

    const submithandler = (e) => {
        e.preventDefault();
        // Save data to localStorage
        localStorage.setItem('data', JSON.stringify(data));
        toast.success("Form submited");
        console.log(data);
    };


    return (

        <div>
            <form action="" onSubmit={submithandler}>
                <div className='w-full h-[90vh] font-poppins flex justify-center items-center'>
                    <div className='w-[24%]  h-full  flex flex-col items-center justify-center gap-y-2'>
                        <h1 className='text-2xl'>ADD MATCHES</h1>
                        <Select
                            placeholder="Select address"
                            sx={{ width: 310, padding: 1 }}
                            slotProps={{
                                listbox: {
                                    placement: 'bottom-start',
                                },
                            }}
                        >
                            <Option value="1">
                                CSPIT-CE
                            </Option>
                            <Option value="2">
                                IIIM-BBA
                            </Option>
                            <Option value="3">
                                DEPST-IT
                            </Option>
                        </Select>
                        <h2>VS</h2>
                        <Select
                            placeholder="Select address"
                            sx={{ width: 310, padding: 1 }}
                            slotProps={{
                                listbox: {
                                    placement: 'bottom-start',
                                },
                            }}
                        >
                            <Option value="1">
                                CSPIT-CE
                            </Option>
                            <Option value="2">
                                IIIM-BBA
                            </Option>
                            <Option value="3">
                                DEPST-IT
                            </Option>
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
