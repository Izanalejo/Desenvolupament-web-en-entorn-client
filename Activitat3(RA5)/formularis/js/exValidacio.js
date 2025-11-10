let formulari = document.getElementById("formulariExValidacio");
formulari.addEventListener("submit", function (event) {

  event.preventDefault();

    let nom = formulari[0].value.trim();    
    let email = formulari[1].value.trim();
    let passw = formulari[2].value.trim();
    let passw2 = formulari[3].value.trim();
    let dni = formulari[4].value.trim();
    let data = formulari[5].value.trim();
    let sexe = formulari[6].value.trim();


    if (nom == "" || email == "" || passw == "" || passw2 == "" || dni == "" || data == "" || sexe == "") {
        alert("Tots els camps són obligatoris ⚠️");
        return;
    }
    if (!/^[a-zA-Z àáèéìíòóùúÀÁÈÉÌÍÒÓÙÚçÇñÑ]+$/.test(nom)) {
        alert("El nom no es correcte");
        return;
    }

    //validació d'email per expressió regular
    if (!/^[a-zA-Z1-9._%+-]+@[a-zA-Z1-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("L'email no és correcte 📧")
        return;
    }   

    if(passw.length < 8){
        alert("La contrasenya ha de tenir almenys 8 caràcters 🔐");
        return;
    }
    if(passw2 !== passw){
        alert("Les contrasenyes no coincideixen 🔐");
        return;
    }
    

let lletraDNI = dni.slice(8).toUpperCase();
let numerosDNI = dni.slice(0, 8);
let lletres = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let index = parseInt(numerosDNI) % 23;
if (lletraDNI !== lletres[index]) {
    alert("El DNI no és correcte! 🆔");
    return;
}

if(!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(data)){
    alert("La data no és correcta 📅");
    return;
}


alert("Formulari enviat correctament 🎉");

});


