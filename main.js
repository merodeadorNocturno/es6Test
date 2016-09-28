import requestJson from "./requestJson"; //Modules

let petition = new requestJson(); // Constants

petition.init().then(
    (res) => {
        let {title, body} = requestJson.parseStringToJson(res); // Destructuring & static method invocation
        // Template literals
        let texto = `
            <div>
                <h2>
                    Title: ${title}
                </h2>
            </div>
            <div>
                <p style="max-width:640px;"><b>Body</b>: ${body}</p>
            </div>
        `;

        return texto;
    },
    (error) => {
        return { statusText: `Parse Error ${error}`, status: 1024 };
    }).then((texto) => {
        let app = document.getElementById("app").innerHTML = texto;
    }).catch((reason) => {
        requestJson.displayReason(reason);
    });

console.log("fin");