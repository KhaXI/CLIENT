import axios from "axios";
import { ENV } from "../utils";

export class Auth {
    baseApi = ENV.BASE_API;

    async register(data) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.REGISTER}`;
        /* const url = `${this.baseApi}/${ENV.API_ROUTES.REGISTER}`;
           const params = {
            method: "POST",
            headers: {
            "Content_Type": "application/json",
            },
            body: {
            email: data.email,
            password: data.password,
            },
            };
        */
        return await axios.post(url, data)
            .then(res => {
                console.log(res, '>>>response API<<<')
                return res
            }).catch(err => {
                console.log(err, '>>>error API<<<')
                throw err
            })
    }

    async login(data) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.LOGIN}`;
        return await axios.post(url, data)
            .then(res => {
                console.log(res.data, ">>>login<<<");
                return res.data
            }).catch(err => {
                console.log(err, ">>>error login<<<");
                throw err
            })
    }
    async logout() {
        const url = `${this.baseApi}/${ENV.API_ROUTES.LOGOUT}/${this.getId()}`;
        const config = {
            headers: {
                Authorization: `Bearer ${this.getAccesToken()}`,
            }
        }
        return await axios.get(url, config)
            .then(res => {
                console.log(res.data, ">>>logout response<<<");
                return res.data
            }).catch(err => {
                console.log(err, ">>>logout error<<<");
                throw (err)
            })
    }

    async refreshACcessToken(refreshToken) {

        const url = `${this.baseApi}/${ENV.API_ROUTES.REFRESH_ACCESS_TOKEN}`;
        const data = {
            token: refreshToken
        }
        return await axios.post(url, data)
            .then(res => {
                console.log(res.data.refresh, ">>>Refresh token<<<");
                return res.data.refresh
            }).catch(err => {
                console.log(err, ">>>Error refresh token<<<");
                throw err
            })
    }

    setAccessToken(token) {
        localStorage.setItem(ENV.JWT.ACCESS, token);
    }
    getAccesToken() {
        return localStorage.getItem(ENV.JWT.ACCESS);
    }
    setId(id) {
        localStorage.setItem(ENV.JWT.ID, id);
    }
    getId() {
        return localStorage.getItem(ENV.JWT.ID)
    }
    setRefreshToken(token) {
        localStorage.setItem(ENV.JWT.REFRESH, token);
    }
    getRefreshToken() {
        return localStorage.getItem(ENV.JWT.REFRESH)
    }
    removeTokens() {
        localStorage.removeItem(ENV.JWT.ACCESS);
        localStorage.removeItem(ENV.JWT.REFRESH);
    }
}