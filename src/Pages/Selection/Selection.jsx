import React, { useState, useEffect } from 'react'

const Selection = () => {


    const [loaded, setLoaded] = useState(false);

    const [players, setPlayers] = useState([]);

    useEffect(() => {

    }, []);


    return (
        loaded ?
            <>
                loading...
            </> :
            <>
                <div className='w-full h-14 flex items-center justify-end'>

                    <button className=' text-white bg-primary-color text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-24 font-semibold mr-3' >
                        Confirm
                    </button>
                </div>
                <div className='w-full  flex justify-center'>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-3 w-[98%] ">
                        <div className='w-full flex flex-row justify-evenly h-12 items-center font-semibold font-Outfit bg-slate-300'>
                            <h1>CRICKET SELECTION</h1>
                            <h1>CSPIT-CE</h1>
                            <h1>2024</h1>
                        </div>
                        <table class="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-sm">
                                        Player name
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-sm">
                                        Category
                                    </th>
                                    {/* <th scope="col" class="px-6 py-3 text-sm">
                                Price
                            </th> */}
                                    <th scope="col" class="px-6 py-3 text-sm flex justify-center">
                                        Selection
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b font-semibold hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th class="px-6 py-4  text-gray-900 whitespace-nowrap ">
                                        Mit Monpara
                                    </th>
                                    <td class="px-6 py-4">
                                        All Rounder
                                    </td>
                                    <td class="px-6 py-4 flex justify-center gap-x-7">
                                        <button class="font-medium text-green-700 hover:underline">SELECT</button>
                                        <button class="font-medium  text-red-600 hover:underline">REJECT</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
    )
}

export default Selection
