const form = document.getElementById("form__login");
form.addEventListener("submit", async function (event) {
    event.preventDefault();
    await login();
});

async function login() {
    const url = "Auth/login"
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;


    try {
        const body = { username, password }
        const ret = await sendRequest(url, body);

        localStorage.setItem("@acertpix", JSON.stringify(ret));
        window.location.href = "cadastrar-parceiro.html";
    } catch (error) {
        alert("Dados Inválidos, tente novamente");
        console.log(error);
    }
}