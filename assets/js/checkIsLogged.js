const tokenUser = null;

window.onload = function () {
    const storage = localStorage.getItem("@acertpix") || null;
    if (storage == null) {
        window.location.href = "login.html";
    } else {
        const user = JSON.parse(storage);
        if (user.token == null) {
            window.location.href = "login.html";
        } else {
            tokenUser = user.token;
        }
    }
};