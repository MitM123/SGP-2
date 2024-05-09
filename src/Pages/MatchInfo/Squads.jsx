import React from 'react'
import './Squads.css'

const Squads = () => {
  return (
    <div className='mainsquads p-3 flex flex-col w-full h-full'>
      <div className='w-full p-2 font-semibold text-2xl font-Jost flex justify-center'>
        Playing XI
      </div>

      <div className=' squads1 w-full flex flex-row h-full'>

        <div className='squads2 w-1/2 h-full'>
          <div className='squads21 w-full h-[9vh] bg-gray-400 flex items-center justify-center rounded-l-lg mb-4  p-4  text-lg font-semibold font-Outfit'>
            <h1>CSPIT-CE</h1>
          </div>

          <div className='squads22 w-full border-r-[1px]  border-t-[1px]'>

            <div className='w-full p-2 border-b-[1px]  flex flex-row gap-x-5 justify-center'>
              <img className="h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
              <div className='flex flex-col justify-center'>
                <p className='text-md text-black font-semibold'>Mit Monpara</p>
                <p className="text-slate-500 text-sm font-medium">All rounder</p>
              </div>
            </div>
            <div className='w-full p-2 border-b-[1px] flex flex-row gap-x-5 justify-center'>
              <img className="h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
              <div className='flex flex-col justify-center'>
                <p className='text-md text-black font-semibold'>Mit Monpara</p>
                <p className="text-slate-500 text-sm font-medium">All rounder</p>
              </div>
            </div>
            <div className='w-full p-2  border-b-[1px]  flex flex-row gap-x-5 justify-center'>
              <img className="h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
              <div className='flex flex-col justify-center'>
                <p className='text-md text-black font-semibold'>Mit Monpara</p>
                <p className="text-slate-500 text-sm font-medium">All rounder</p>
              </div>
            </div>

          </div>

        </div>

        <div className='squads3 w-1/2 h-full'>
          <div className='squads31 w-full h-[9vh] bg-gray-400 flex items-center justify-center  rounded-r-lg mb-4 p-4  text-lg font-semibold font-Outfit'>
            <h1>CSPIT-IT</h1>
          </div>
          <div className='squads32 w-full border-l-[1px]  border-t-[1px]'>
            <div className='w-full p-2 border-b-[1px] flex flex-row gap-x-5 justify-center'>
              <img className="h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
              <div className='flex flex-col justify-center'>
                <p className='text-md text-black font-semibold'>Mit Monpara</p>
                <p className="text-slate-500 text-sm font-medium">All rounder</p>
              </div>
            </div>
            <div className='w-full p-2 border-b-[1px]  flex flex-row gap-x-5 justify-center'>
              <img className="h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
              <div className='flex flex-col justify-center'>
                <p className='text-md text-black font-semibold'>Mit Monpara</p>
                <p className="text-slate-500 text-sm font-medium">All rounder</p>
              </div>
            </div>
            <div className='w-full p-2 border-b-[1px]  flex flex-row gap-x-5 justify-center'>
              <img className="h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvZ0pbf4bXvAJgVZVuRQqrNWnoWl96cV6wQ&usqp=CAU" alt="Face" />
              <div className='flex flex-col justify-center'>
                <p className='text-md text-black font-semibold'>Mit Monpara</p>
                <p className="text-slate-500 text-sm font-medium">All rounder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Squads
