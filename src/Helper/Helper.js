import axios from 'axios'
import Global from '../Utils/Global';
import config from '../config.json';

axios.defaults.baseURL = config.server;

export async function registerUser(signupuserdata) {
    try {
        const res = await Global.httpPost('/auth/register', {
            email: signupuserdata.email, name: signupuserdata.name, userId: signupuserdata.userId, password: signupuserdata.password
        });
        return Promise.resolve(res.data.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function loginUser(loginuserdata) {
    try {
        const res = await Global.httpPost('/auth/login', {
            emailOrUserId: loginuserdata.email, password: loginuserdata.password
        });
        Global.user = res.data.data.user;
        Global.token = res.data.data.token;
        return Promise.resolve(res.data.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function getTeams() {
    try {
        const res = await Global.httpGet('/teams/year/' + new Date(Date.now()).getFullYear());
        Global.teams = res.data.data.teams;
        return Promise.resolve(res.data.data.teams);
    }
    catch (error) {
        return Promise.reject(error);
    }
}

export async function addTeam(teamnamedata) {
    try {
        const { data } = await Global.httpPost('/teams', {
            name: teamnamedata.name
        });
        const team = data.data.team;
        Global.teams.push(team)
        return Promise.resolve(team);
    } catch (error) {
        console.log(error)
        return Promise.reject(error);
    }
}