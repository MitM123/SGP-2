import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { LuTimerReset } from "react-icons/lu";

const Checkotp = () => {
    document.addEventListener("DOMContentLoaded", function (event) {

        function OTPInput() {
            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
        } OTPInput();
    });

    return (
        <div>
            <div className="h-[92vh] py-20 px-3">
                <div className="container mx-auto h-full">
                    <div className="max-w-sm mx-auto flex justify-center h-full md:max-w-lg">
                        <div className="w-[80%] h-full">
                            <div className="bg-slate-400 py-3 h-[70%] rounded text-center">
                                <h1 className="text-2xl font-bold">Verify Email</h1>
                                <div className="flex flex-col mt-4 font-Rubik">
                                    <span>Enter the OTP you received at</span>
                                    <span className="font-bold">mi*********gmail.com</span>
                                </div>
                                <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                                    <input className="m-2 outline-none h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength="1" />
                                    <input className="m-2 outline-none h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" />
                                    <input className="m-2 outline-none h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" />
                                    <input className="m-2 outline-none h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
                                </div>
                                <Link to='/newpassword'>
                                    <div className='flex justify-center  w-full'>
                                        <button className='flex items-center justify-center bg-primary-color font-semibold p-2 rounded-lg mt-2 text-white gap-x-2 w-[60%] '  >
                                            Verify Email
                                        </button>

                                    </div>
                                </Link>
                                <div className='w-full flex flex-row justify-center mt-2 gap-x-6'>
                                    <Link to='/login'>
                                        <button className=' text-black  text-lg font-Outfit items-center flex gap-1 justify-start p-1 rounded-lg  flex-row'>
                                            <FaArrowLeftLong />
                                            Back to login
                                        </button>
                                    </Link>
                                    <div className='text-lg font-Outfit flex flex-row items-center gap-1 cursor-pointer'>
                                        <LuTimerReset />
                                        Resend it
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkotp
