function fazPost(url, body, authorization=false)  {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    if(authorization){
    request.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI1MiIsInVuaXF1ZV9uYW1lIjoiV2VzbGVpIExpbWEiLCJyb2xlIjoiMiIsImVtYWlsIjoid2VzbGVpLmxpbWFAbGV3ZWNwLmNvbS5iciIsIkNvbXBhbnlJZCI6IjE4IiwibmJmIjoxNjQxNjUzMDAwLCJleHAiOjE2NDE3Mzk0MDAsImlhdCI6MTY0MTY1MzAwMH0.kP-d9ehz7hNY_Zm_o2X9HP0fx64F2MxZqU_MfHxM8Bk" + authorization)
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