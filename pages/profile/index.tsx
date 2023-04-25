import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Profile = () => {
    const route = useRouter();
    const { id } = route.query;

    useEffect(() => {
        console.log(id);
        if (!id)
            route.push('/profile/1')
    }, [id])

    return (
        <div className='main'>Auto Redirect...</div>
    )
}

export default Profile