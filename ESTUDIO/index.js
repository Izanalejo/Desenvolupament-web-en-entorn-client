const user = document.getElementById('user');
const passwd = document.getElementById('passwd');
const btnEntrar = document.getElementById('entrar');
const btnRegistrar = document.getElementById('registrarse');
const btnLimpiar = document.getElementById('limpiar');
const msj = document.getElementById('mensaje');

//Validaciones

const errorNom = document.getElementById("error-nom");
const errorPasswd = document.getElementById("error-passwd");


const nameRegex = /^[a-zA-Z àáèéìíòóùúÀÁÈÉÌÍÒÓÙÚcñÑ]+$/;
const passwordRegex = /^[a-zA-Z àáèéìíòóùúÀÁÈÉÌÍÒÓÙÚcñÑ 0-9]+$/;

user.addEventListener("blur", () => {
    if (!nameRegex.test(user.value.trim())) {
        errorNom.innerHTML = "El nombre no es válido ❌";
    } else {
        errorNom.innerHTML = "";
    }
});
passwd.addEventListener("blur", () => {
    if (!nameRegex.test(passwd.value.trim())) {
        errorPasswd.innerHTML = "La contrasenya no es válida ❌";
    } else {
        errorPasswd.innerHTML = "";
    }
});

incrementarVisitas();

let usuarios = [
    {user: "admin", passwd: 1234}
];


btnRegistrar.addEventListener('click', () => {
        setCookie("sesionIniciada", 1, 30);
        const userValue = document.getElementById('user').value;
        const passwdValue = document.getElementById('passwd').value;
        if(userValue === '' || passwdValue === ''){
            msj.textContent = "Todos los campos deben rellenarse";
            msj.style.color = "red";
            return;
        }else{
            usuarios.push({
            user: userValue,
            passwd: passwdValue
        });
        msj.textContent = "Usuario y contraseña guardados correctamente";
        msj.style.color = "green";
        console.log(usuarios);
        return;
        }
});

btnEntrar.addEventListener('click', () => {
    const user = document.getElementById('user').value;
    const passwd = document.getElementById('passwd').value;
    let usuarioEncontrado = false;

    for (const u of usuarios){
        if(u.user === user && u.passwd === passwd){
            usuarioEncontrado = true;
        }
    }
    if(usuarioEncontrado){
        msj.textContent = "Sesión iniciada correctamente!";
        msj.style.color = "green";
    }else{
        msj.textContent = "Usuario o contraseña incorrectos";
        msj.style.color = "red";

    }
});


function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}



function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue); //decodeURIComponent deja limpio el nombre de las cookies en caso de que hay "&" o algo parecido.
        }
    }

    return null; // Si no existeix
}

function incrementarVisitas(){
    let visitas = getCookie("visitas");
    if (visitas === ''){
        visitas = 1;
    }else{
        visitas = parseInt(visitas)+1;
    }
    setCookie("visitas", 1, 365);
}