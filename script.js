let email = [];


function invia(input){
    switch(input){
        case "aggiungiAbbonato":
            aggiungiAbbonato(document.getElementById("email").value,document.getElementById("nome").value);
        break;
        case "prenotaAttivita":
            prenotaAttivita(document.getElementById("mail").value,document.getElementById("attivita").value);
        break;
        case "visualizzaPrenotazioni":
            visualizzaPrenotazioni(document.getElementById("mail1").value);
        break;
        case "rimuoviAttivita":
            rimuoviPrenotazione(document.getElementById("mail2").value,document.getElementById("attivita1").value);
        break;
        
    }
}

function aggiungiAbbonato(mail, nome){
    if(mail && conta(mail)==1){
        if(email[mail]){
            alert("Email già in uso");
        }else{
            email[mail] = { nome: nome, attivita: [] };
        }
    }
    else{
        alert("Email non valida");
    }
}


function prenotaAttivita(mail, attivita1){
    if(email[mail]){
        if(email[mail].attivita.indexOf(attivita1)!=-1){
            alert("Attività già prenotata");
        }else{
            email[mail].attivita.push(attivita1);
            alert("Aggiunta l'attività " +  attivita1);
        }
    }else{
        alert("Inserire un'email valida");
    }
}

function visualizzaPrenotazioni(mail){
    if(email[mail]){
        document.getElementById("lista").innerHTML = "";
        for(let i = 0; i<email[mail].attivita.length; i++){
            document.getElementById("lista").innerHTML += email[mail].attivita[i] + "<br>";
            //console.log(email[mail].attivita[i]);
        }
    }else{
        alert("Inserire un'email valida");
    }
}

function rimuoviPrenotazione(mail, attivita1) {
     if(email[mail]){
        if(email[mail].attivita.indexOf(attivita1) != -1){
            email[mail].attivita.splice(email[mail].attivita.indexOf(attivita1),1);
            alert("Attività " + attivita1 + " rimossa");
        }else{
            alert("Inserire un'attività valida");
        }
     }else{
        alert("Inserire un'email valida");
    }
}
/*
aggiungiAbbonato("email@gmail.com","Antonio")
prenotaAttivita("email@gmail.com","asdfgh")
visualizzaPrenotazioni("email@gmail.com")
rimuoviPrenotazione("email@gmail.com","asdfgh")
visualizzaPrenotazioni("email@gmail.com")*/

function conta(stringa){
    let quantita = 0
    for(let i = 0; i<stringa.length;i++){
        if(stringa[i]=="@"){
            quantita++;
        }
    }
    return quantita;
}