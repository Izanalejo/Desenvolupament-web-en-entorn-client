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
    let ciutats = formulari[7].value.trim();

    if (
        nom == "" ||
        email == "" ||
        passw == "" ||
        passw2 == "" ||
        dni == "" ||
        data == "" ||
        sexe == ""
    ) {
        let prueba = document.createElement("p");
        prueba.style.color = "red";
        prueba.textContent = "Tots els camps són obligatoris ⚠️";
        formulariExValidacio.append(prueba);
        return;
    }
    if (!/^[a-zA-Z àáèéìíòóùúÀÁÈÉÌÍÒÓÙÚçÇñÑ]+$/.test(nom)) {
        let pruebaNom = document.createElement("p");
        pruebaNom.style.color = "red";
        pruebaNom.textContent = "El nom no es correcte";
        formulariExValidacio.append(pruebaNom);
        return;
    }

    //validació d'email per expressió regular
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z1-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        let pruebaEmail = document.createElement("p");
        pruebaEmail.style.color = "red";
        pruebaEmail.textContent = "L'email no és correcte 📧";
        formulariExValidacio.append(pruebaEmail);
        return;
    }

    if (passw.length < 8) {
        let pruebaPassw = document.createElement("p");
        pruebaPassw.style.color = "red";
        pruebaPassw.textContent =
            "La contrasenya ha de tenir almenys 8 caràcters 🔐";
        formulariExValidacio.append(pruebaPassw);
        return;
    }
    if (passw2 !== passw) {
        let pruebaPassw2 = document.createElement("p");
        pruebaPassw2.style.color = "red";
        pruebaPassw2.textContent = "Les contrasenyes no coincideixen 🔐";
        formulariExValidacio.append(pruebaPassw2);
        return;
    }

    let lletraDNI = dni.slice(8).toUpperCase();
    let numerosDNI = dni.slice(0, 8);
    let lletres = [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E",
    ];
    let index = parseInt(numerosDNI) % 23;
    if (lletraDNI !== lletres[index]) {
        let pruebaDNI = document.createElement("p");
        pruebaDNI.style.color = "red";
        pruebaDNI.textContent = "El DNI no és correcte! 🆔";
        formulariExValidacio.append(pruebaDNI);
        return;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        let pruebaData = document.createElement("p");
        pruebaData.style.color = "red";
        pruebaData.textContent = "El nom no es correcte";
        formulariExValidacio.append(pruebaData);
        return;
    }

    let sexeValid = ["Masculí", "Femení", "Altres"];
    if (!sexeValid.includes(sexe)) {
        let pruebaSexe = document.createElement("p");
        pruebaSexe.style.color = "red";
        pruebaSexe.textContent = "El sexe no és correcte ⚧️";
        formulariExValidacio.append(pruebaSexe);
        return;
    }

    let ciutatValid = ["Barcelona", "Girona", "Tarragona", "Lleida"];
    if (!ciutatValid.includes(ciutats)) {
        let pruebaCiutat = document.createElement("p");ç
        pruebaCiutat.style.color = "red";
        pruebaCiutat.textContent = "La ciutat no és correcta 🏙️";
        formulariExValidacio.append(pruebaCiutat);
        return;
    }
    
    alert("Formulari enviat correctament 🎉");
});
