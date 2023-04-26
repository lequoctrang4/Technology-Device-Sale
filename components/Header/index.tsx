import React, { useEffect } from 'react'
import HeaderUser from './user'
import { useGContext } from '../GlobalContext'
import { useRouter } from 'next/router';
import HeaderAdmin from './Admin';

const Header = () => {
    const { user } = useGContext();
    const { push } = useRouter();

    useEffect(() => {
        user.isAdmin === '1' && push('/admin')
    }, [])
    
    return user.isAdmin === '1' ? <HeaderAdmin /> : <HeaderUser />
}

export default Header