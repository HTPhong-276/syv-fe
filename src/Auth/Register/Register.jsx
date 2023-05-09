import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const cx = classNames.bind(styles);

function Register() {

    const schema = yup.object({
        username: yup.string()
            .required('Username must not be empty!'),
        password: yup.string()
            .required('Password must not be empty!')
            .test('length', 'Password must be > 3 letters', val => val.length >= 3),
        email: yup.string()
            .required('Email must not be empty!')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        localStorage.setItem(data.username, JSON.stringify({
            username: data.username,
            password: data.password,
            email: data.email
        }));
    }

    return (
        <Fragment>
            <form className={cx('register-form')} onSubmit={handleSubmit(onSubmit)}>

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

                <label htmlFor='email'> Email: </label>
                <div className={cx('input-box')}>
                    <input type='email' {...register("email")} id='email' />
                </div>
                {errors.email && <p className={cx('error')}>{errors.email.message}</p>}

                <input type='submit' value='Sign up' className={cx('btn-solid')} />
            </form>
        </Fragment>
    );
}

export default Register