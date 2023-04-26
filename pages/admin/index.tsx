import { useGContext } from '@/components/GlobalContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Admin() {
    const { user } = useGContext();
    const { push, query } = useRouter();
    console.log(query)

    useEffect(() => {
        push(user.isAdmin === '0' ? '/' : '/admin/product')
    }, [])

    return <div className='main'>Đang xác thực...</div>
}