import { createContext, useMemo, useState } from "react";
import Axios from "../Api/Axios";
import { useLocalStorage } from "../Hook/useLocalStorage";
import { Exception } from "sass";

const AuthContext = createContext({});
const LOGIN_URL = '/Account/login';

export const AuthProvider = ({ children }) => {

    const [loggedUser, setloggedUser] = useLocalStorage("user", null);
    const [isAuth, setIsAuth] = useState(false);

    const Login = async (data) => {

        try {
            const response = await Axios.post(
                LOGIN_URL,
                JSON.stringify({
                    username: data.username,
                    password: data.password
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            )
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.token;
            const role = response?.data?.role;
            setloggedUser({
                username: data.username,
                password: data.password,
                accessToken,
                role
            })
            setIsAuth(true);
        } catch (err) {
            throw new Exception("Wrong username or password!");
        }
    }

    const Logout = () => {
        setloggedUser(null);
        setIsAuth(false);
    };

    const value = useMemo(() => ({
        loggedUser,
        Login,
        Logout
    }), [loggedUser])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;