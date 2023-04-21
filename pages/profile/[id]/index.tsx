import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Address from './address';
import History from './history';
import Profile from './profile';

const UserProfile = () => {
    const route = useRouter();
    const {id} = route.query;
    const [option, setOption] = useState("");
    
    return (
        <div className='grid grid-cols-5'>
            <Sidebar />
            <div className='col-span-4'>
                {/* <button className='btn-danger' onClick={()=>setOption('address')}>Address</button>
                <button className='btn-danger' onClick={()=>setOption('history')}>History</button> */}
                {
                    option === "" && <Profile/>
                }
                {
                    option === "address" && <Address />
                }
                {
                    option === "history" && <History />
                }
            </div>
        </div>
    )
}

export default UserProfile;