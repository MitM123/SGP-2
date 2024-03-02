import React, { useState, useEffect } from 'react'
import { getPlayers, getPlayersayers } from '../../Helper/Helper';

const Selection = () => {


    const [loaded, setLoaded] = useState(false);

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getPlayers().then(players => {
            console.log(players)
            setPlayers(players);
            setLoaded(true);
        }).catch(err => {
            console.log(err);
        })
    }, [])


    return (
        loaded ?
            <>
                loading...
            </> :
            <div className='w-full  flex justify-center'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3 w-[98%] ">
                    <div className='w-full flex flex-row justify-evenly h-12 items-center font-semibold font-Outfit bg-slate-300'>
                        <h1>CRICKET SELECTION</h1>
                        <h1>CSPIT-CE</h1>
                        <h1>2024</h1>
                    </div>
                    <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4"></th>
                                <th scope="col" className="px-6 py-3 text-sm">
                                    Player name
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                Color
                            </th> */}
                                <th scope="col" className="px-6 py-3 text-sm">
                                    Category
                                </th>
                                {/* <th scope="col" className="px-6 py-3 text-sm">
                                Price
                            </th> */}
                                <th scope="col" className="px-6 py-3 text-sm">
                                    Selection
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b font-semibold hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th className="px-6 py-4  text-gray-900 whitespace-nowrap ">
                                    Mit Monpara
                                </th>
                                <td className="px-6 py-4">
                                    All Rounder
                                </td>
                                <td className="px-6 py-4">
                                    <button className="font-medium text-green-700 hover:underline">SELECT</button>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="font-medium  text-red-600 hover:underline">REJECT</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Selection
