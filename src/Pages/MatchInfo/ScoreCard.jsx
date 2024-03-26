import React from 'react'

const ScoreCard = () => {
  return (
    <div className='w-full flex flex-row p-5'>
      <div className='w-[70%] h-full pl-7 pr-7 border-r-2'>
        <div className='w-full flex flex-row gap-5'>
          <div className='w-[25%] p-3 font-semibold h-14 rounded-md bg-slate-300 flex items-center font-Outfit flex-row gap-x-4'>
            <h1>CSPIT-CE</h1>
            <h1>120-7 (20.0)</h1>
          </div>
          <div className='w-[25%] p-3 font-semibold h-14 rounded-md bg-slate-300 flex items-center font-Outfit flex-row gap-x-4'>
            <h1>CSPIT-IT</h1>
            <h1>120-7 (20.0)</h1>
          </div>
        </div>

        <div className='flex gap-y-6 flex-col mb-4'>

          <div class="relative overflow-x-auto">
            <h1 className='mt-5 mb-2 text-2xl font-Rubik font-semibold'>BATTING</h1>
            <table class="w-full text-md text-left rtl:text-right text-gray-500 ">
              <thead class="text-md text-white bg-gray-800 ">
                <tr>
                  <th scope="col" class="px-7 py-4  w-[30%] font-medium">
                    Batter
                  </th>
                  <th scope="col" class="px-7 py-4 w-[40%] font-medium">

                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    R
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    B
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    4s
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    6s
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    SR
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b bg-zinc-200 text-black font-medium">
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                    Mit Monpara
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">
                    NOT OUT
                  </th>
                  <th class="px-6 py-3 font-medium">
                    14
                  </th>
                  <th class="px-6 py-3 font-medium">
                    5
                  </th>
                  <th class="px-6 py-3 font-medium">
                    1
                  </th>
                  <th class="px-6 py-3 font-medium">
                    1
                  </th>
                  <th class="px-6 py-3 font-medium">
                    100.00
                  </th>
                </tr>
                <tr class="bg-white text-black border-b">
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                    Jalay Movaliya
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">
                    c Halliday b Devine
                  </th>
                  <th class="px-6 py-3 font-medium">
                    15
                  </th>
                  <th class="px-6 py-3 font-medium">
                    6
                  </th>
                  <th class="px-6 py-3 font-medium">
                    2
                  </th>
                  <th class="px-6 py-3 font-medium">
                    0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    250.00
                  </th>
                </tr>
                <tr class="border-b bg-zinc-200 text-black ">
                  <th scope="row" class="px-6 py-4 font-medium text-black  whitespace-nowrap ">
                    Akshay Lakkad
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">
                    NOT OUT
                  </th>
                  <th class="px-6 py-3 font-medium">
                    16
                  </th>
                  <th class="px-6 py-3 font-medium">
                    8
                  </th>
                  <th class="px-6 py-3 font-medium">
                    4
                  </th>
                  <th class="px-6 py-3 font-medium">
                    0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    200.00
                  </th>
                </tr>
              </tbody>
            </table>
            <div class="border-b bg-gray-800 text-white w-full flex flex-row justify-between">
              <div scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                Extras:
              </div>
              <div class="px-6 py-3 font-medium">
                6 (b 0, lb 2, w 3, nb 1, p 0)
              </div>
            </div>
          </div>


          <div class="relative overflow-x-auto">
            <h1 className='mt-5 mb-2 text-2xl font-Rubik font-semibold'>BOWLING</h1>
            <table class="w-full text-md text-left rtl:text-right text-gray-500 ">
              <thead class="text-md text-white bg-gray-800 ">
                <tr>
                  <th scope="col" class="px-7 py-4  w-[30%] font-medium">
                    Bowler
                  </th>
                  <th scope="col" class="px-7 py-4 w-[40%] font-medium">

                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    O
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    M
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    R
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    W
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    ER
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b bg-zinc-200 text-black font-medium">
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                    Mit Monpara
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">
                    4.0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    30
                  </th>
                  <th class="px-6 py-3 font-medium">
                    2
                  </th>
                  <th class="px-6 py-3 font-medium">
                    10.00
                  </th>
                </tr>
                <tr class="bg-white text-black border-b">
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                    Jalay Movaliya
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">
                    4.0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    25
                  </th>
                  <th class="px-6 py-3 font-medium">
                    2
                  </th>
                  <th class="px-6 py-3 font-medium">
                    6.25
                  </th>
                </tr>
                <tr class="border-b bg-zinc-200 text-black ">
                  <th scope="row" class="px-6 py-4 font-medium text-black  whitespace-nowrap ">
                    Akshay Lakkad
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">
                    4.0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    0
                  </th>
                  <th class="px-6 py-3 font-medium">
                    20
                  </th>
                  <th class="px-6 py-3 font-medium">
                    1
                  </th>
                  <th class="px-6 py-3 font-medium">
                    5.00
                  </th>
                </tr>
              </tbody>
            </table>
          </div>


          <div class="relative overflow-x-auto">
            <h1 className='mt-5 mb-2 text-2xl font-Rubik font-semibold'>FALL OF WICKETS</h1>
            <table class="w-full text-md text-left rtl:text-right text-gray-500 ">
              <thead class="text-md text-white bg-gray-800 ">
                <tr>
                  <th scope="col" class="px-7 py-4  w-[30%] font-medium">
                    Batsman
                  </th>
                  <th scope="col" class="px-7 py-4 w-[40%] font-medium">

                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">

                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">

                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">

                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    Score
                  </th>
                  <th scope="col" class="px-7 py-4 font-medium">
                    Over
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b bg-zinc-200 text-black font-medium">
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                    Mit Monpara
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">
                    3-1
                  </th>
                  <th class="px-6 py-3 font-medium">
                    1.1
                  </th>
                </tr>
                <tr class="bg-white text-black border-b">
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                    Jalay Movaliya
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">
                    34-2
                  </th>
                  <th class="px-6 py-3 font-medium">
                    5.4
                  </th>
                </tr>
                <tr class="border-b bg-zinc-200 text-black ">
                  <th scope="row" class="px-6 py-4 font-medium text-black  whitespace-nowrap ">
                    Akshay Lakkad
                  </th>
                  <th class="px-6 py-3  w-[30%] font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">

                  </th>
                  <th class="px-6 py-3 font-medium">
                    37-3
                  </th>
                  <th class="px-6 py-3 font-medium">
                    7.1
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>


      <div className='w-[30%] h-full pl-4 pr-4'>
        <div className='text-2xl font-Rubik mt-4 mb-4'>
          Yet to bat
        </div>
        <div className='grid w-full grid-cols-2 font-Outfit text-lg gap-x-3 gap-y-3'>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>Ayush Kalathiya</h1>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>Vandit Kalathiya</h1>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>Dhruv Kotadiya</h1>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>Meet Gangani</h1>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>Rutu Bhimani</h1>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>tirth bhingradiya</h1>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>Sahil Maniya</h1>
          <h1 className='w-full h-12 flex items-center justify-center bg-slate-400 rounded-md hover:underline cursor-pointer'>Hit Goti</h1>


        </div>
      </div>

    </div>
  )
}

export default ScoreCard
