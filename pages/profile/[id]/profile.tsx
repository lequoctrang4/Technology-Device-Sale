import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { useGContext } from '@/components/GlobalContext'
import { editProfile } from '@/pages/api/userApi'
import { getCookie } from 'cookies-next'
import { setCookie } from 'typescript-cookie'

export default function Profile() {
    const [changePass, setChangePass] = useState(false)
    const { user, setUser } = useGContext()
    const [formValue, setformValue] = useState({
        "name": user?.name,
        "email": user?.email,
        "mobile": user?.mobile
    })

    const handleChange = (e: any) => {
        const val = e.target.value
        setformValue({ ...formValue, [e.target.name]: val })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const myCookie = getCookie('user');
        editProfile(myCookie, formValue)
            .then(resp => {
                setCookie('user', resp.token, { expires: 7 });
                setUser({ ...user, ...formValue });
            })
    }

    return (
        <div className='col-span-4 p-8 flex flex-col gap-4'>
            <div>
                <h3>Thông tin cá nhân</h3>
            </div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <table className={style['userinfo']}>
                        <tbody>
                            <tr>
                                <td>Họ và tên</td>
                                <td>
                                    <input type='text' className='border border-gray-300' value={formValue.name} onChange={handleChange} name='name' />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type='email' className='border border-gray-300' value={formValue.email} onChange={handleChange} name='email' />
                                </td>
                            </tr>
                            <tr>
                                <td>Số điện thoại</td>
                                <td>
                                    <input type='number' className='border border-gray-300' value={formValue.mobile} onChange={handleChange} name='mobile' />
                                </td>
                            </tr>
                            <tr>
                                <td>Giới tính</td>
                                <td className='flex gap-4'>
                                    <div className='flex flex-row gap-2'>
                                        <input type='radio' className='border border-gray-300' name='gender' value="Nam" defaultChecked />
                                        <label>Nam</label>
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <input type='radio' className='border border-gray-300' name='gender' value="Nữ" />
                                        <label>Nữ</label>
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <input type='radio' className='border border-gray-300' name='gender' value="Khác" />
                                        <label>Khác</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Ngày sinh</td>
                                <td>
                                    <input type='date' className='border border-gray-300' value='2000-03-10' disabled />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='justify-end'>
                                    <button className='text-blue-500 hover:underline' onClick={() => setChangePass(changePass => !changePass)}>Đổi mật khẩu</button>
                                </td>
                            </tr>
                            {changePass &&
                                <>
                                    <tr>
                                        <td>Mật khẩu hiện tại</td>
                                        <td>
                                            <input type='password' className='border border-gray-300' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mật khẩu mới</td>
                                        <td>
                                            <input type='password' className='border border-gray-300' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nhập lại mật khẩu mới</td>
                                        <td>
                                            <input type='password' className='border border-gray-300' />
                                        </td>
                                    </tr>
                                </>

                            }
                            <tr>
                                <td></td>
                                <td>
                                    <button className='btn-danger' >Lưu thay đổi</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
