import React, { useState } from 'react'
import style from './style.module.scss'
export default function Profile() {
    const [changePass, setChangePass] = useState(false)

    return (
        <div className='col-span-4 p-8 flex flex-col gap-4'>
            <div>
                <h3>Thông tin cá nhân</h3>
            </div>
            <div>
                <table className={style['userinfo']}>
                    <tbody>
                        <tr>
                            <td>Họ và tên</td>
                            <td>
                                <input type='text' className='border border-gray-300' value='Phan Hải Hà' />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type='email' className='border border-gray-300' value='hahahah@gmail.com' />
                            </td>
                        </tr>
                        <tr>
                            <td>Giới tính</td>
                            <td className='flex gap-4'>
                                <div className='flex flex-row gap-2'>
                                    <input type='radio' className='border border-gray-300' name='gender' value="Nam" />
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
                                <input type='date' className='border border-gray-300' />
                            </td>
                        </tr>
                        <tr>
                            <td>Mật khẩu</td>
                            <td>
                                <input type='password' className='border border-gray-300' value='hahahaha' />
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
                                    <td>Mật khẩu mới</td>
                                    <td>
                                        <input type='password' className='border border-gray-300' value='' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhập lại mật khẩu mới</td>
                                    <td>
                                        <input type='password' className='border border-gray-300' value='' />
                                    </td>
                                </tr>
                            </>

                        }
                        <tr>
                            <td></td>
                            <td>
                                <button className='btn-danger'>Lưu thay đổi</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
