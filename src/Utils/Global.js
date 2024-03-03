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
    static matches = {};
    static teamMapWithIds = {};
    static teamMapping = {
        "ce": "CSPIT-CE",
        "dce": "DEPSTAR-CE",
        "cs": "CSPIT-CSE",
        "dcs": "DEPSTAR-CSE",
        "it": "CSPIT-IT",
        "dit": "DEPSTAR-IT",
        "aiml": "CSPIT-CSE",
        // "bba": "IIIM",
        // "dce": "DEPSTAR-CE",
        // "ce": "CSPIT-CE",
        // "dce": "DEPSTAR-CE",
    };
    
    static async getUser() {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await this.httpGet("/auth/me");
                resolve(data.user);
            } catch (err) {
                Global.httpPut("/auth/logout").then(_ => {
                    Global.user = null;
                    Global.token = null;
                    cookies.remove("token");
                }).catch(_ => {
                    Global.user = null;
                    Global.token = null;
                    cookies.remove("token");
                })
                reject("No user found.")
            }
        })
    }

    static httpGet(endPoint, tokenRequired = true, params = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.token && tokenRequired) {
                    if (cookies.get("token"))
                        this.token = cookies.get("token");
                    else
                        return reject("Token not found");
                }
                cookies.set("token", this.token)
                try {
                    let output = await axios.get(endPoint, {
                        params,
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: 'Bearer ' + this.token
                        }
                    });
                    resolve(output);
                } catch (err) {
                    reject(err?.response?.data?.error || "Something went wrong");
                }
            } catch (err) {
                console.error("F-Error", endPoint, err);
                reject("Something went wrong");
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
                        return reject("Token not found");
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
                    reject(err?.response?.data?.error || "Something went wrong");
                }
            } catch (err) {
                reject("Something went wrong");
            }
        });
    }

    static httpPut(endPoint, body = {}, tokenRequired = true) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.token && tokenRequired) {
                    if (cookies.get("token"))
                        this.token = cookies.get("token");
                    else
                        return reject("Token not found");
                }
                cookies.set("token", this.token);
                try {
                    const headers = {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer ' + this.token
                    };

                    const res = await axios.put(endPoint, body, { headers });
                    resolve(res);
                } catch (err) {
                    reject(err?.response?.data?.error || "Something went wrong");
                }
            } catch (err) {
                console.error("F-Error", endPoint, err);
                reject("Something went wrong");
            }
        });
    }

    static isSportsHead() {
        return this.user?.roles.includes("SPORTS_HEAD");
    }
}

// module.exports = Global;