import { useRouter } from 'next/router'
import React from 'react'
import { useGContext } from '../GlobalContext';

import AdminSidebar from './admin'

const Sidebar = () => {
    const { query, push } = useRouter();
    const { user } = useGContext();

    if (user.isAdmin === '1') 
        return <AdminSidebar />
    return <></>;
}

export default Sidebar