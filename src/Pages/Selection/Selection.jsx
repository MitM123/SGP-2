import React from 'react'

const Selection = () => {


    return (
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
                            <th scope="col" class="p-4"></th>
                            <th scope="col" class="px-6 py-3 text-sm">
                                Player name
                            </th>
                            {/* <th scope="col" class="px-6 py-3">
                                Color
                            </th> */}
                            <th scope="col" class="px-6 py-3 text-sm">
                                Category
                            </th>
                            {/* <th scope="col" class="px-6 py-3 text-sm">
                                Price
                            </th> */}
                            <th scope="col" class="px-6 py-3 text-sm">
                                Selection
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b font-semibold hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th  class="px-6 py-4  text-gray-900 whitespace-nowrap ">
                               Mit Monpara
                            </th>
                            <td class="px-6 py-4">
                                All Rounder
                            </td>
                            <td class="px-6 py-4">
                                <button class="font-medium text-green-700 hover:underline">SELECT</button>
                            </td>
                            <td class="px-6 py-4">
                                <button  class="font-medium  text-red-600 hover:underline">REJECT</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Selection
