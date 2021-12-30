const fetch = require("node-fetch"); //npm i node-fetch@2 
let baseUrl = "https://SampleAPI.oxytomato.repl.co"; //API URL; get from replit.com


class TheApi {
    constructor(token) {
        if(!token) throw new TypeError("valid Token must be provided!")
        this.token = token;
    }
    getDate() {
        return new Promise((resolve, reject) => {
            fetch(encodeURI(`${baseUrl}/api/time?token=${this.token}`)).then(async data => {
                let jsonData = await data.json();
                if(jsonData.error) return reject(jsonData.error);
                return resolve(jsonData);
            }).catch(reject);
        })
    }
    getLogo(){
        return new Promise((resolve, reject) => {
            fetch(encodeURI(`${baseUrl}/api/logo?token=${this.token}`)).then(async data => {
                let jsonData = await data.json();
                if(jsonData.error) return reject(jsonData.error);
                return resolve(jsonData);
            }).catch(reject);
        })
    }
}

module.exports = TheApi;