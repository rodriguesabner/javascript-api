function fazPost(url, body, authorization=false)  {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    if(authorization){
    request.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" + authorization)
    }

    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

async function efetuarLogin() {
    event.preventDefault()
    let url = "https://apiacertpixanec.acertpix.com.br/api/Auth/login"
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    console.log(nome)
    console.log(senha)

    user = {
        "username": nome,
        "password": senha,
    }

    //acredito que esse post aqui em baixo retorna alguns dados, certo?
    fazPost(url, user);
    
}


function cadastrarParceiro() {
    event.preventDefault()
    let url = "https://apiacertpixanec.acertpix.com.br/api/Partner/Insert"
    let parceiro = document.getElementById("parceiro").value
    let documentNum = document.getElementById("documentNum").value
    let notificationFraudDate = document.getElementById("notificationFraudDate").value
    let debit = document.getElementById("debit").value
    let telephone = document.getElementById("telephone").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value

    cadastrarParceiros = {
        "name": parceiro,
        "documentNumber": documentNum,
        "notificationFraudDate": notificationFraudDate,
        "debit": debit,
        "telephone": telephone,
        "address": address,
        "city": city,
        "state": state,
        "token": aValue
      }
      fazPost(url, cadastrarParceiros)
}
