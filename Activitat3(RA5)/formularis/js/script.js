//arribo als inputs directament
let name=document.getElementById("nom").value;
console.log(name);

//arribo al formulari pel seu id
let formulari=document.getElementById("formulariContacte");
console.log(formulari);//arribo a un array amb tot el que hi ha dins del formulari
console.log(formulari[0].value);
console.log(formulari[1].value);

//arribo al formulari fent servir document.forms
console.log(document.forms); //accedeixo a tos els forms de la meva pàgina
let formulari2 = document.forms[0]; //accedeixo al form que esta a laposicio 0

console.log(formulari2);
console.log(formulari2.elements.nom.value);

//com manipular/validar els camps d'un formulari si entro pel formulari i no pels camps

//com adonar-se que l'usuari ha clicat al botó de submit??
formulari.addEventListener("submit", function (event){

    event.preventDefault(); //evita un enviament fictici => no es queden els camps en blanc
    //let nom =formulari2.elements.nom.value;
    let nom=formulari[0].value.trim();
    let email=formulari[1].value.trim();
  
    
    if (nom == "" || email  == "") {

      alert("Tots els camps són obligatoris ⚠️");
      return;

    }
    if(!/^[a-zA-Z àáèéìíòóùúÀÁÈÉÌÍÒÓÙÚçÇñÑ]+$/.test(nom)){
      alert("El nom no es correcte");
      return; 
    }

    //validació d'email per expressió regular
    
    if(!/^[a-zA-Z1-9._%+-]+@[a-zA-Z1-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      alert("L'email no és correcte 📧");
      return;
    }

  alert("Formulari enviat correctament 🎉");


});
