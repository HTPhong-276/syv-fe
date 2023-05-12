import React, { Fragment, useState } from 'react';
import styles from './Authenticate.module.scss';
import classNames from 'classnames/bind';
import Register from '../../Auth/Register/Register';
import Login from '../../Auth/Login/Login';

const cx = classNames.bind(styles);

function Authenticate() {

    const [isLogin, setIsLogin] = useState(true);

    const changeAuthHandle = () => {
        setIsLogin(!isLogin);
    }

    return (
        <Fragment>
            <div className={cx('container')}>
                <div className={cx('auth-container')}>
                    <h1 className={cx('logo')}>SYV</h1>
                    <h3 className={cx('welcome')}>
                        {isLogin ? 'Share your video with ' : 'Welcome to '}
                        <span>SYV</span>
                    </h3>
                    <div className={cx('horizon-break')}></div>
                    {isLogin ? <Login /> : <Register />}
                    <p>
                        {isLogin ? 'New to SYV?' : 'Had an account?'}
                        <button className={cx('btn-change-auth')} onClick={changeAuthHandle}>
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>

                </div>
            </div>
        </Fragment>
    )
}

export default Authenticate