import axios from 'axios'
import Global from '../Utils/Global';
import config from '../config.json';

axios.defaults.baseURL = config.server;

export async function registerUser(signupuserdata) {
    try {
        const res = await Global.httpPost('/auth/register', {
            email: signupuserdata.email, name: signupuserdata.name, userId: signupuserdata.userId, password: signupuserdata.password
        }, false);
        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function loginUser(loginuserdata) {
    try {
        const res = await Global.httpPost('/auth/login', {
            emailOrUserId: loginuserdata.email, password: loginuserdata.password
        }, false);
        Global.user = res.data.user;
        Global.token = res.data.token;
        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function getTeams() {
    try {
        const res = await Global.httpGet('/teams/year/' + new Date(Date.now()).getFullYear(), false);
        Global.teams = res.data.teams;
        return Promise.resolve(res.data.teams);
    }
    catch (error) {
        return Promise.reject(error);
    }
}

export async function getTeamByName(name) {
    try {
        const res = await Global.httpGet('/teams/name/' + name, true);
        return Promise.resolve(res.data.team);
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
        const team = data.team;
        Global.teams.push(team);
        return Promise.resolve(team);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function getMatches() {
    try {
        const res = await Global.httpGet('/matches/' + new Date(Date.now()).getFullYear(), false);
        Global.matches = res.data.matches;
        return Promise.resolve(res.data.matches);
    }
    catch (error) {
        return Promise.reject(error);
    }
}

export async function addMatch(matchData) {
    try {
        const { data } = await Global.httpPost('/matches', {
            team1Id: matchData.team1Id, team2Id: matchData.team2Id, date: matchData.date
        });
        const match = data.match;
        Global.matches.push(match);
        return Promise.resolve(match);
    }
    catch (error) {
        return Promise.reject(error);
    }
}