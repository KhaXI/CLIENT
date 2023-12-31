const SERVER_IP = "localhost:3977";

export const ENV ={
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API:`http://${SERVER_IP}/api/v1`,
    API_ROUTES:{
        REGISTER:"auth/register",
        LOGIN:"auth/login",
        USER_ME:"user/me",
        USER:"user",
        USERS:"users",
        MENU:"menu",
        LOGOUT:"auth/logout",
        COURSE:"course",

        REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    },
    JWT:{
        ACCESS: "access",
        REFRESH: "resfresh",
        ID: 'id'
    }
}