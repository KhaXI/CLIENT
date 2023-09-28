import axios from "axios";
import { ENV } from "../utils";

export class Course {
    baseApi = ENV.BASE_API;



    async getCourses(params) {
        const pageFilter = `page=${params.page || 1}`
        const limitFliter = `limit=${params.limit || 10}`
        const url = `${this.baseApi}/${ENV.API_ROUTES.COURSE}?${pageFilter}&${limitFliter}`

        return await axios.get(url).then(res => {
            console.console.log(res.data, "getCourses response<<<");;
            return res.data
        }).catch(err => {
            console.log(err, "getCourse error<<<");
            throw (err)
        })
    }
}