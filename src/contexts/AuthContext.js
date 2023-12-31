import { useState, useEffect, createContext } from "react";
import { User, Auth } from "../api";
import { hasExpiredToken } from "../utils";

const userController = new User();
const authController = new Auth();
export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const accessToken = authController.getAccesToken();
            const refreshToken = authController.getRefreshToken();

            if (!accessToken || !refreshToken) {
                logout();
                setLoading(false);
                return;
            }

            if (hasExpiredToken(accessToken)) {
                if (hasExpiredToken(refreshToken)) {
                    logout();
                } else {
                    alert("relogin");
                    await relogin(refreshToken);
                }
            } else {
                await login(accessToken);
            }

            setLoading(false);
        })();
    }, []);

    const relogin = async (refreshToken) => {
        try {
            const { accessToken } = await authController.refreshACcessToken(refreshToken);
            console.log(accessToken, ">>>refresh token<<<");
            authController.setAccessToken(accessToken);
            await login(accessToken);
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (accessToken) => {
        try {

            const response = await userController.getMe(accessToken)
            delete response.password;
            setUser(response)
            setToken(accessToken)
        } catch (error) {
            console.log(error);
        }
        /*  console.log("<<<Login Context>>>");
         console.log(accessToken); */
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        authController.logout();
        authController.removeTokens();
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
    };

    if (loading) return null;

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}