/*18. Neteja d'strings
Tens un array amb noms d’usuaris no estandarditzats:

const usuaris = [
    " maria ", 
    "JOAN", 
    "Pere", 
    " lAIA", 
    "julia "
];
Escriu una funció tradicional anomenada netejaUsuaris que:

Elimina espais (trim)

Passa el text a minúscules

Capitalitza la primera lletra (Maria, Joan, etc.)

Retorna un nou array amb els noms correctes.

Transforma la funció:

En una funció anònima

En una funció fletxa compacta

Fes servir la versió fletxa amb .map() per obtenir el resultat final.

Mostra el resultat i comprova que els noms estan nets i correctes*/


const usuaris = [
    " maria ", 
    "JOAN", 
    "Pere", 
    " lAIA", 
    "julia "
];

function netejaUsuaris(usuaris){
    const resultat = [];
        for (let i = 0; i < usuaris.length; i++) {
            // Eliminar espais, convertir a minúscules
            const eliminarEspais = usuaris[i].trim().toLowerCase();
            // Capitalitzar primera lletra
            const nomCapitalitzat = eliminarEspais.charAt(0).toUpperCase() + eliminarEspais.slice(1);
            resultat.push(nomCapitalitzat);
        }
        return resultat;
}

console.log(netejaUsuaris(usuaris));