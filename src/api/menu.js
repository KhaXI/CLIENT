import axios from "axios";
import { ENV } from "../utils";

export class Menu {
    baseApi = ENV.BASE_API;

    async getMenu(active = undefined) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.MENU}?active=${active}`;

        return await axios.get(url)
            .then(res => {
                console.log(res.data, ">>>getMenu response");
                return res.data
            }).catch(err => {
                console.log(err, ">>> getMenu error<<<");
                throw (err)
            })
    }

    async createMenu(accessToken, data) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.MENU}`;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }
        return await axios.post(url, data, config)
            .then(res => {
                console.log(res.data, ">>>createMenu response");
                return res.data
            }).catch(err => {
                console.log(err, ">>>createMenu error");
                throw (err)
            })
    }
    async updateMenu(accessToken, idMenu, data) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.MENU}/${idMenu}`;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }
        return await axios.patch(url, data, config)
            .then(res => {
                console.log(res.data, ">>>updateMenu response");
                return res.data
            }).catch(err => {
                console.log(err, ">>>updateMenu error");
                throw (err)
            })
    }
    async deleteMenu(accessToken, idMenu){
        const url = `${this.baseApi}/${ENV.API_ROUTES.MENU}/${idMenu}`;
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }
        return await axios.delete(url, config)
            .then(res => {
                console.log(res, ">>>deleteMenu response");
                return res
            }).catch(err => {
                console.log(err, ">>>deleteMenu error");
                throw (err)
            })
    }
}