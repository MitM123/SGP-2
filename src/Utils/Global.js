import axios from 'axios';
import config from '../config.json'
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class Global {
    static axios = axios.create({
        baseURL: config.server,
        withCredentials: true,
    })
    static user;
    static token;
    static isVerified;
    static teams = new Array();

    static async getUser() {
        return new Promise(async(resolve, reject) => {
            try {
                const { data } = await this.httpGet("/auth/me");
                resolve(data.data.user);
            } catch (err) {
                reject("No user found.")
                return false;
            }
        })
    }

    static httpGet(endPoint, tokenRequired = true) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.token && tokenRequired) {
                    if (cookies.get("token")) this.token = cookies.get("token");
                    else {
                        console.log("token not found");
                        return;
                    }
                }
                cookies.set("token", this.token)
                try {
                    let output = await axios.get(endPoint, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: 'Bearer ' + this.token
                        }
                    });
                    resolve(output);
                } catch (err) {
                    reject({ error: err?.response?.data?.data?.error || "Something went wrong" });
                }
            } catch (err) {
                console.error("F-Error", endPoint, err);
                reject({ error: "Something went wrong", isError: true });
            }
        });
    }

    static httpPost(endPoint, body, tokenRequired = true) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.token && tokenRequired) {
                    if (cookies.get("token"))
                        this.token = cookies.get("token");
                    else
                        return reject({ error: "Token not found", isError: true });
                }
                cookies.set("token", this.token)
                let res;
                try {
                    res = await axios.post(endPoint, body, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: 'Bearer ' + this.token
                        }
                    });
                    resolve(res);
                } catch (err) {
                    console.log(err)
                    reject({ error: err?.response?.data?.data?.error || "Something went wrong" });
                }
            } catch (err) {
                reject({ error: "Something went wrong" });
            }
        });
    }

    static httpPut(endPoint, body = {}, tokenRequired = true) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.token && tokenRequired) {
                    if (cookies.get("token")) this.token = cookies.get("token");
                    else {
                        console.log("token not found");
                        return;
                    }
                }
                cookies.set("token", this.token);
                console.log(this.token);
                let res;
                try {
                    res = await axios.put(endPoint, {
                        ...body,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: 'Bearer ' + this.token
                        }
                    });
                    resolve(res);
                } catch (err) {
                    reject({ error: err?.response?.data?.data?.error || "Something went wrong" });
                }
            } catch (err) {
                console.error("F-Error", endPoint, err);
                resolve({ error: "Something went wrong" });
            }
        });
    }
}

// module.exports = Global;