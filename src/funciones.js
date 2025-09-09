
function saludar(nombre = "Mundo") {
    alert("Hola " + nombre);  
}

//saludar("goku");

function sumar(a = 0, b = 0) {
    return a + b;
}


const resultado = sumar(1);
alert(resultado);


const saludarButton = document.getElementById('saludar');
saludarButton.addEventListener('click', () => { 
    const input = document.getElementById('nombre');
    const nombre = input.value;
    saludar(nombre);
});


const sumarButton = document.getElementById('sumar');
sumarButton.addEventListener('click', () => {
    const inputA = document.getElementById('numero-a');
    const inputB = document.getElementById('numero-b');

    const numeroA = Number(inputA.value);
    const numeroB = Number(inputB.value);

    const resultado = sumar(numeroA, numeroB);

    alert("El resultado es: " + resultado);
});




/*function saludar(nombre="Mundo") {
    alert("Hola "  +nombre);  
}

//saludar("goku");

function sumar(a=0,b=0){
    return a + b;
}

const resultado = sumar(1);

alert(resultado);

const saludarButton = document.getElementById('saludar');
saludarButton.addEventListener('click', () => { 
    const input = document.getElementById('nombre');
    const nombre = input.value;
    saludar(nombre);
})*/


