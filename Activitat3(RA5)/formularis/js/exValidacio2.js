//llego al formulaio haciendo servir documents.forms
let form2 = document.forms[0] // <- Accedo al form que esta en la posicion 0

//sean variables globales

//Regex para validar los campos
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const nameRegex = /^[a-zA-Z àáèéìíòóùúÀÁÈÉÌÍÒÓÙÚcñÑ]+$/
const passwordRegex = /^[a-zA-Z àáèéìíòóùúÀÁÈÉÌÍÒÓÙÚcñÑ 0-9]+$/
const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20[0-1]\d|202[0-5])$/;
let nom, email, dni, pass, con_password, gender, city, birthday, error;

// --- VALIDACIÓN EN BLUR DEL NOMBRE ---
const inputNom = document.getElementById("nom");
const errorNom = document.getElementById("error-nom");

inputNom.addEventListener("blur", () => {
    if (!nameRegex.test(inputNom.value.trim())) {
        errorNom.innerHTML = "El nombre no es válido ❌";
    } else {
        errorNom.innerHTML = "";
    }
});

//----------------------------------------------------------------
//Codigo proporcionado por chatgpt - forma de imprimir el "submit"
form2.addEventListener('submit', (event) => {
    event.preventDefault(); // evita que se recargue la página
    //Variables para recoger los elementos enviados por formulario
    nom = form2.elements.nom.value
    email = form2.elements.email.value
    dni = form2.elements.dni.value
    pass = form2.elements.pass.value
    con_password = form2.elements.con_password.value
    gender = form2.elements.gender.value
    city = form2.elements.city.value
    birthday = form2.elements.birthday.value

    error = "";


    //VALIDAR CAMPOS VACIOS ----------------------------------
    if (nom === "" || email === "" || pass === "" || con_password === "" || dni === "" || gender === "" || city === "" || birthday === "") {
        error += "Todos los campos son obligatorios ⚠️ <br>"

    }
    //VALIDAR NOMBRE --------------------------------------
    if (!nameRegex.test(nom)) {
        error += "El nombre no es válido <br>";

    }

    //VALIDAR EMAIL---------------------------------------
    if (!emailRegex.test(email)) {
        const inputEmail = document.getElementById("email");
        const errorEmail = document.getElementById("error-email");

        inputEmail.addEventListener("blur", () => {
            if (!emailRegex.test(inputEmail.value.trim())) {
                errorEmail.innerHTML = "El correo no es válido ❌";
            } else {
                errorEmail.innerHTML = "";
            }
        });
    }

    //VALIDAR CONTRASEÑA----------------------------------
    if (!passwordRegex.test(pass)) {
        error += "La contraseña no es valida <br>"

    }
    if (pass.length < 8) {
        error += "La contraseña tiene que tener como minimo 8 caracteres <br>"

    }
    if (pass !== con_password) {
        error += "La contraseña no coincide <br>"

    }

    //VALIDAR FECHA----------------------------------------
    if (!fechaRegex.test(birthday)) {
        error += "La fecha no es correcta <br>"

    }
    //VALIDAR DNI------------------------------------------
    if (!validarDNI()) {
        error += "El DNI no es valido <br>"

    }
    if (error !== "") {
        document.getElementById("error").innerHTML = error;
        document.getElementById("error").style.color = "red"
    } else {
        //FORMULARIO ENVIADO
        alert("Formulari enviat correctament 🎉");
        console.log("Nom: " + nom)
        console.log("Email: " + email)
        console.log("DNI: " + dni)
        console.log("Fecha de nacimiento: " + birthday)
        console.log("Genero: " + gender)
        console.log("Lugar de nacimiento: " + city)
        form2.reset(); // Neteja el formulari

    }




});
//----------------------------------------------------------------

//VALIDAR DNI ----------------------------------------------------
function validarDNI() //no necesito pasar la variable dni ya que es global
{
    dni = dni.toUpperCase().trim()
    const dniregex = /^[0-9]{8}[A-Z]$/;

    if (!dniregex.test(dni)) {//detectar que la forma noes la correcta
        return false;
    }

    let num = parseInt(dni.slice(0, 8))
    let letter = dni[8]

    const dniletters = "TRWAGMYFPDXBNJZSQVHLCKE"
    let dniletter = dniletters[num % dniletters.length]

    return letter === dniletter;
}

function errorlog($message) {

    error.style.color = "white"
    error.style.backgroundColor = "red"
    error.innerHTML += $message
}

