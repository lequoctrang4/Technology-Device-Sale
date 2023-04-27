import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useGContext } from '@/components/GlobalContext'

const Profile = () => {
    const route = useRouter();
    const { user } = useGContext();
    const id = false

    useEffect(() => {
        if (!id)
            route.push('/profile/'+user.id)
    }, [id])

    return (
        <div className='main'>Auto Redirect...</div>
    )
}

export default Profile