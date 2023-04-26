import React, { useRef, useState } from 'react'
import style from './style.module.scss'
import { signUp } from '@/pages/api/userApi';
import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';
import { useGContext } from '../GlobalContext';
import { useRouter } from 'next/router';

const SignUp = ({ callback }: { callback: Function }) => {
    const { setUser } = useGContext();
    const { push } = useRouter();
    const [formValue, setFormValue] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const setNotification = (notify: NOTIFICATION_TYPE, titleNotify: string, messageNotify: string) => {
        Store.addNotification({
            title: titleNotify,
            message: messageNotify,
            type: notify,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 2000,
                onScreen: true
            }
        });
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        signUp(formValue)
            .then(resp => {
                if (resp.status === 400) {
                    setNotification('warning', 'Something went wrong....', resp.data);
                    return;
                }
                else {
                    setNotification('success', 'Thành công', 'Vui lòng đăng nhập lại!');
                    callback(false);
                    push('/')
                }
            })
    }

    const handleChange = (event: any) => {
        const val = event.target.value;
        setFormValue({ ...formValue, [event.target.name]: val });
    }


    return (
        <form className={style['login-form']} onSubmit={handleSubmit}>
            <div>
                <label>Họ và tên</label>
                <input type='name' name='name' onChange={handleChange} required />
            </div>
            <div>
                <label>Số điện thoại</label>
                <input type='number' name='mobile' onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type='email' name='email' onChange={handleChange} required />
            </div>
            <div>
                <label>Mật khẩu</label>
                <input type='password' name='password' onChange={handleChange} required />
            </div>
            <div>
                <label>Nhập lại mật khẩu</label>
                <input type='password' name='confirmPassword' onChange={handleChange} required />
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