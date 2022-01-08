const BASE_URL = "https://apiacertpixanec.acertpix.com.br/api";

function sendRequest(url, body, authorization = null) {
    return new Promise((resolve, reject) => {
        console.log("Body=", body);

        const request = new XMLHttpRequest();
        request.open("POST", `${BASE_URL}/${url}`, true);
        setHeaders(request, authorization);

        request.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(request.response);
            } else {
                reject({
                    status: this.status,
                    statusText: request.statusText
                });
            }
        };

        request.onerror = function () {
            reject({
                status: this.status,
                statusText: request.statusText
            });
        };

        request.send(JSON.stringify(body));
    });
}

function setHeaders(request, authorization){
    request.setRequestHeader("Content-type", "application/json");
        
    if (authorization != null) {
        request.setRequestHeader("Authorization", "Bearer " + authorization);
    }
}