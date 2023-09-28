import axios from "axios";
import { ENV } from "../utils";

export class User {
    baseApi = ENV.BASE_API;

    async getMe(accessToken) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
        return await axios.get(url, config)
            .then(res => {
                return res.data
            }).catch(err => {
                console.log(err, ">>> getMe error<<<");
                throw (err)
            })
    }
    async createUser(accessToken, data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key])
            })
            if (data.fileAvatar) {
                formData.append("avatar", data.fileAvatar);
            }
            console.log(data, "<<<DATAAA>>>");
            const url = `${this.baseApi}/${ENV.API_ROUTES.USER}`
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            }
            return await axios.post(url, data, config)
                .then(res => {
                    console.log(res.data, ">>>Create User<<<");
                    return res.data
                }).catch(err => {
                    console.log(err, ">>>error Create User<<<");
                    throw (err)
                })
        } catch (error) {
            throw error
        }

    }
    async getUsers(accessToken, active = undefined) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.USERS}?active=${active}`;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        return await axios.get(url, config)
            .then(res => {
                console.log(res.data, ">>>getUsers response<<<");
                return res.data
            }).catch(err => {
                console.log(err, ">>>getMe error<<<");
                throw (err)
            })
    }
    async updateUser(accessToken, idUser, userData) {
        try {
            const data = userData;
            if (!data.password) {
                delete data.password;
            }
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key])
            })
            if (data.fileAvatar) {
                formData.append("avatar", data.fileAvatar);
            }
            console.log(data, "<<<DATAAA UPDATE USER>>>");
            const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${idUser}`
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            }
            return await axios.patch(url, data, config)
                .then(res => {
                    console.log(res.data, ">>>Update User<<<");
                    return res.data
                }).catch(err => {
                    console.log(err, ">>>error Update User<<<");
                    throw (err)
                })
        } catch (error) {
            throw error
        }
    }

    async deleteUser(accessToken, idUser) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${idUser}`;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        return await axios.delete(url, config)
            .then(res => {
                console.log(res.data, ">>>Delete user<<<");
                return res.data
            }).catch(err => {
                console.log(err, ">>>error Delete User");
                throw (err)
            })
    }
}