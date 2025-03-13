// Dado una palabra, p.e,:
let palabra = "Marta"
// Y dada una letra, p.e.:
let letra = "a"

// Debemos mostrar un mensaje que diga la cantidad de veces que está la letra en la palabra
// La solución está más abajo, ¡pero no la mires!





























































let resultado = 0
for (caracter of palabra) {
    console.log(caracter);
    if (caracter == letra) {
        resultado = resultado + 1 // resultado += 1
    }
}

if (resultado == 0) {
    console.log(`En la palabra "${palabra}" no aparece la letra "${letra}"`);
} else if (resultado == 1) {
    console.log(`En la palabra "${palabra}" aparece la letra "${letra}" ${resultado} vez`);
} else {
    console.log(`En la palabra "${palabra}" aparece la letra "${letra}" ${resultado} veces`);

}
// resultado