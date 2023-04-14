import React from 'react'
import style from './style.module.scss'

const SignUp = () => {
    return (
        <form className={style['login-form']}>
            <div>
                <label>Họ và tên</label>
                <input type='name' />
            </div>
            <div>
                <label>Số điện thoại</label>
                <input type='email' />
            </div>
            <div>
                <label>Email</label>
                <input type='email' />
            </div>
            <div>
                <label>Mật khẩu</label>
                <input type='password' />
            </div>
            <div>
                <label>Nhập lại mật khẩu</label>
                <input type='password' />
            </div>
            <div>
                <button className='btn-danger'>
                    Đăng ký
                </button>
            </div>
        </form>
    )
}

SignUp.Header = () => <h4>Đăng ký tài khoản mới</h4>
SignUp.Footer = ({ callback }: { callback: Function }) => {
    return (
        <p className='text-sm text-right'>
            <span>
                Bạn đã có tài khoản?{' '}
                <a
                    onClick={() => callback(true)}
                    className='text-sky-500 hover:text-sky-400 underline cursor-pointer'
                >
                    Đăng nhập ngay!
                </a>
            </span>
        </p>
    )
}

export default SignUp