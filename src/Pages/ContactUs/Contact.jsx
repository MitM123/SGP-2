import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='w-full h-[92vh] relative'>
      <div className='w-full h-full flex justify-center items-center absolute'>
        <div className='w-[85%] h-[90%] drop-shadow-xl flex flex-row bg-slate-300 rounded-xl'>
          <div className='w-[40%]'>
          </div>
          <div className='flex flex-col w-[40%] gap-y-6'>
            <h1 className='text-5xl font-Outfit font-semibold mt-6'>Get in Touch</h1>
            <div className=' flex flex-col justify-center font-Rubik'>
              <label htmlFor="name" ></label>
              <input type="name" id='name' name='name' required placeholder='Your Name' className='outline-none text-white p-3 rounded-lg bg-slate-900 ' />
              <br />
              <label htmlFor="email" ></label>
              <input type="email" id='email' name='email' required placeholder='Your email address' className='outline-none text-white p-3 rounded-lg bg-slate-900' />
              <br />
              <label htmlFor="mobileno" ></label>
              <input type="text" id='number' name='number' required placeholder='Your Mobile number' className='outline-none text-white p-3 rounded-lg bg-slate-900' />
              <br />
              <label for="review"></label>
              <textarea id="review" name="review" placeholder='Send a Message' className='outline-none text-white p-3 resize-none rounded-lg bg-slate-900'>
              </textarea>
              <button className=' text-white bg-primary-color text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-24 font-semibold mt-4'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[27%] ml-12 h-[78%] rounded-xl absolute top-1/2 transform -translate-y-1/2 shadow-xl shadow-sky-300 bg-blue-950'>
        <div className='flex flex-col gap-y-4  text-xl text-white'>
          <div><h1 className='text-4xl h-20 flex justify-center  items-center font-Outfit'>Contact us</h1></div>
          <div className='flex flex-col gap-y-8 mt-10 ml-4 font-Outfit'>
            <p className='flex flex-row gap-x-3'><h1 className='flex items-center'><FaLocationDot /></h1>B/2,Madhav Gurukul,Anand</p>
            <h6 className='flex flex-row gap-x-3'><h1 className='flex items-center'><MdEmail /></h1>spoural@charusat.com</h6>
            <h2 className='flex flex-row gap-x-3'><h1 className='flex items-center'><BsFillTelephoneFill /></h1>+1 9999 999 999</h2>
            <p className='flex flex-row gap-x-3'><h1 className='flex items-center'><FaChrome /></h1>www.charusat.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;