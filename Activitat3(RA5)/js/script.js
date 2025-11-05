//Arribo als inputs directament
let name = document.getElementById("nom").value;
console.log(name);

//Arribo al formulari pel seu ID
let formulari = document.getElementById("formulariContacte");
console.log(formulari); // Arribo a un array amb tot el que hi ha dins del formulari
console.log(formulari[1].value);
console.log(formulari[2].value);

//Arribo al formulari fent servir document.forms
console.log(document.forms)
let formulari2 = document.forms[0];


console.log(formulari2);
console.log(formulari2.elements.nom.value);

//Com manipular/validar els camps d'un formulari si entro pel formulari i no pels camps

//Com adonar-se que l'usuari ha clicat el botó de submit
formulari.addEventListener("submit", function(event){
    event.preventDefault();//Evita un enviament fictici

    let nom = formulari[1].value.trim();
    let email = formulari[2].value.trim();

    console.log(nom);
    console.log(email);
    if (nom === "" || email === "") {
        alert("Tots els camps són obligatoris ⚠️");
        return;
    }
    if (!email.includes("@")) {
        alert("El correu no sembla vàlid 📧");
        return;
    }
    alert("Formulari enviat correctament 🎉");
    formulari.reset(); // Neteja el formulari

})
