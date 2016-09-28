// Classes, constants and Symbols in javascript
const URL = Symbol("url");
class requestJson {
    constructor(url = "http://jsonplaceholder.typicode.com/posts/1") { // Default values
        this[URL] = url;
    }

    init () {
        return new Promise((resolve, reject) => { // Promises - Arrow functions
            this.makeAjaxRequest(resolve, reject);
        });
    }

    makeAjaxRequest(resolve, reject) {
        let xhr = new XMLHttpRequest(); // Block Variables
        xhr.open("GET", this[URL]);
        xhr.onload = () => {
            let {status, statusText, response} = xhr; // Destructuring
            if (status >= 200 && status < 300) {
                resolve(response);
            } else { // Propiedades abreviadas
                reject({ status, statusText });
            }
        };
        xhr.onerror = () => {
            let {status, statusText} = xhr.status; // Destructuring
            reject({ status, statusText });
        };
        xhr.send();
    }

    static parseStringToJson(jsonFormattedString) {
        return JSON.parse(jsonFormattedString);
    }

    static displayReason(reason) {
        let i18n = new Intl.DateTimeFormat("es-MX").format(new Date().getTime()); // Internacionalización
        console.error(`Catched exception: ${reason.statusText} with code ${reason.status} at ${i18n}`);
    }
}


export default requestJson;