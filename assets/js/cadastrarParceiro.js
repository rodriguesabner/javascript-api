const form = document.getElementById("form__cad_parceiro");
form.addEventListener("submit", async function (event) {
    event.preventDefault();
    await register();
});

async function register() {
    const url = "Partner/Insert";

    const parceiro = document.getElementById("parceiro").value
    const documentNum = document.getElementById("documentNum").value
    const notificationFraudDate = document.getElementById("notificationFraudDate").value
    const debit = document.getElementById("debit").value
    const telephone = document.getElementById("telephone").value
    const address = document.getElementById("address").value
    const city = document.getElementById("city").value
    const state = document.getElementById("state").value

    const body = {
        "name": parceiro,
        "documentNumber": documentNum,
        "notificationFraudDate": notificationFraudDate,
        "debit": debit,
        "telephone": telephone,
        "address": address,
        "city": city,
        "state": state,
    }

    try {
        const data = await sendRequest(url, body, tokenUser);
        console.log(data);
    } catch (error) {
        alert("Erro ao cadastrar parceiro");
        console.log(error);
    }
}