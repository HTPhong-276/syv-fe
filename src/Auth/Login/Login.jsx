import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {

    const navigate = useNavigate();

    const schema = yup.object({
        username: yup.string()
            .required('Username must not be empty!'),
        password: yup.string()
            .required('Password must not be empty!')
            .test('length', 'Password must be > 3 letters', val => val.length >= 3)
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.username));
        if (userData) {
            if (userData.password === data.password) {
                localStorage.setItem('loggedUser', JSON.stringify({
                    username: data.username,
                }));
                navigate('/video')
            } else {
                alert("Username or Password is not matching with our record");
            }
        } else {
            alert("Username or Password is not matching with our record");
        }
    }

    return (
        <Fragment>
            <form className={cx('login-form')} onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor='username'> Username: </label>
                <div className={cx('input-box')}>
                    <input type='text' {...register("username")} id='username' />
                </div>
                {errors.username && <p className={cx('error')}>{errors.username.message}</p>}

                <label htmlFor='password'> Password: </label>
                <div className={cx('input-box')}>
                    <input type='password' {...register("password")} id='password' />
                </div>
                {errors.password && <p className={cx('error')}>{errors.password.message}</p>}

                <input type='submit' value='Sign in' className={cx('btn-solid')} />
            </form>
        </Fragment>
    )
}

export default Login