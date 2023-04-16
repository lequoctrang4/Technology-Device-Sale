import React from 'react'
import style from './style.module.scss'
import { setCookie } from 'typescript-cookie'

const SignIn = () => {
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
            <div>
                <button className='btn-danger'>
                    Đăng nhập
                </button>
            </div>
        </form>
    )
}

SignIn.Header = () => <h4>Login</h4>;
SignIn.Footer = ({ callback }: { callback: Function }) => {
    return <p className='text-sm text-right'>
        <span>
            Bạn chưa có tài khoản?{' '}
            <a
                onClick={() => callback(false)}
                className='text-sky-500 hover:text-sky-400 underline cursor-pointer'
            >
                Đăng ký ngay
            </a>
        </span>
    </p>
}

export default SignIn;