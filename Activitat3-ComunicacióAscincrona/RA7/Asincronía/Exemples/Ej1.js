function saludar(nom){
    console.log("Hola " + nom);
}

function processarUsuari(callback){
    const nom = "izan";

    callback(nom);
}

processarUsuari(saludar);