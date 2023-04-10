import React from 'react'
import style from './style.module.scss'
import { setCookie } from 'typescript-cookie'

const Login = () => {
    return (
        <form className={style['login-form']}>
            <div>
                <label>Email</label>
                <input type='email' />
            </div>
            <div>
                <label>Password</label>
                <input type='password' />
            </div>
            <p>
                <span className='text-sm'>
                    Bạn chưa có tài khoản?{' '}
                    <a className='text-sky-500 hover:text-sky-400 underline cursor-pointer'>Đăng ký ngay!</a>
                </span>
            </p>
        </form>
    )
}

Login.Header = () => <h4>Login</h4>;
Login.Footer = () => {
    const handleLogin = () => {
        setCookie('user', 1, { expires: 7 });
    }
    return <button className='btn-danger' onClick={handleLogin}>
        Đăng nhập
    </button>
}

export default Login