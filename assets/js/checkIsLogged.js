const tokenUser = null;

window.onload = function () {
    const storage = localStorage.getItem("@acertpix") || null;
    if (storage == null) {
        redirectToLogin();
    } else {
        const user = JSON.parse(storage);   
        if (user.token == null) {
            redirectToLogin();   
        } else {
            tokenUser = user.token;
        }
    }
};

function redirectToLogin(){
    location.href = "login.html";
}