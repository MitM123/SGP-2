import React from 'react'
import Global from '../../Utils/Global';
import { Option, Select } from '@mui/joy';
import { getTeamByName } from '../../Helper/Helper';
import toast from 'react-hot-toast';





const ApplyNow = () => {

    var pattern = /(?:\(d\))?(\d+)([a-zA-Z]+)\d+@charusat\.edu\.in/;

    function extractString(id) {
        var match = pattern.exec(id);
        if (match) {
            return match[2];
        } else {
            return null;
        }
    }

    // var extractedString1 = extractString(id1); // "ce"
    // var extractedString2 = extractString(id2); // "ce"

    const handleSubmit = async (e) => {
        const deptName = extractString(Global.user.email)
        if(!deptName)
        {
            toast.error("Login using charusat email id");
            return;
        }
        const team = await getTeamByName(Global.teamMapping[deptName]);
        if(!team)
        {
        
            toast.error("Your department is not presenting in cricket...");
        }
        await Global.httpPut('/teams/player', { teamId: team.sis_id, playerEmail: Global.user.email })
        alert("Done...")
    }

    return (
        <div className='w-full h-[92vh] flex justify-center items-center'>
            <form action="" className='mainsignup flex flex-col w-3/12 gap-y-6 font-poppins' onSubmit={handleSubmit}>
                <h1 className='text-black font-bold text-2xl flex justify-center font-poppins'>APPLY FOR SPORTS</h1>
                <div className='flex flex-col gap-y-6'>
                    <div className='h-12 w-full p-2 flex bg-slate-300 rounded-md text-black text-lg font-Outfit items-center'>
                        {Global.user.name}
                    </div>
                    <div className='h-12 w-full p-2 flex bg-slate-300  rounded-md text-black text-lg font-Outfit  items-center'>
                        {Global.user.email}
                    </div>
                    <Select
                        placeholder="Select Sport"
                        sx={{ width: '100%', padding: 1 }}
                        slotProps={{
                            listbox: {
                                placement: 'bottom-start',
                            },
                        }}>
                        <Option value='cricket'>
                            CRICKET
                        </Option>
                    </Select>
                    <button className='text-white w-full bg-primary-color text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg font-semibold' >
                        APPLY NOW
                    </button>
                </div>
            </form >
        </div>
    )
}

export default ApplyNow
