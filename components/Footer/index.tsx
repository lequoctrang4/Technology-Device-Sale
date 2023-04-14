import React from 'react'
import Logo from '@/asset/image/mewfone.png'
import Image from 'next/image'
import style from './style.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={'bg-primary'}>
            <div className={'main ' + style.footer}>
                <ul className='md:col-span-2'>
                    <li><Link href=''>Chính sách bảo mật</Link></li>
                    <li><Link href=''>Quy chế hoạt động</Link></li>
                    <li><Link href=''>Câu hỏi thường gặp</Link></li>
                    <li>
                        Liên hệ
                        <ul>
                            <li><Link href=''>mewfone@hcmut.edu.vn</Link></li>
                            <li><Link href=''>1800 1008</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul className='md:col-span-2'>
                    Về chúng tôi
                    <li>Phan Hải Hà - 2011134</li>
                    <li>Nguyễn Đình Minh Đạt	- 2012927</li>
                    <li>Lê Quốc Trạng - 2014812</li>
                    <li>Trần Như Bửu - 1810840</li>
                </ul>
                <Image src={Logo} alt='logo' className={style.logo} />
            </div>
        </footer>
    )
}

export default Footer