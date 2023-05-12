import React, { Fragment, useEffect, useRef, useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthProvider';

const cx = classNames.bind(styles);

function Login() {

    const navigate = useNavigate();

    const { Login, loggedUser } = useContext(AuthContext);
    const [loginErr, setLoginErr] = useState("");

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

    const loginHandle = async (data) => {
        try {
            Login(data);
            navigate('/video');
        } catch (err) {

        }
    }

    return (
        <Fragment>
            <form className={cx('login-form')} onSubmit={handleSubmit(loginHandle)}>

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