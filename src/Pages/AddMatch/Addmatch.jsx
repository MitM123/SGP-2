import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { FaArrowRight } from "react-icons/fa6";
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

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
                    <div className='w-[30%]  h-full  flex flex-col items-center justify-center gap-y-2'>
                        <h1 className='text-2xl'>ADD MATCHES</h1>
                        <label htmlFor="team1" ></label>
                        <input type="text" id='team1' name='team1' placeholder='Team Name' className='outline-none text-white w-full  p-3 rounded-lg bg-slate-900 '
                            value={data.team1}
                            required
                            onChange={handleinput}
                        />
                        <h2>VS</h2>
                        <label htmlFor="team2" ></label>
                        <input type="text" id='team2' name='team2' placeholder='Team Name' className='outline-none text-white p-3 w-full  rounded-lg bg-slate-900'
                            value={data.team2}
                            required
                            onChange={handleinput}
                        />
                        <div className='flex flex-row items-center justify-center w-full gap-x-3 mt-2'>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DateTimePicker']} sx={{width:'100%'}}>
                                    <DateTimePicker label="Select Date and Time"
                                        onChange={dateTimeHandler}
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
