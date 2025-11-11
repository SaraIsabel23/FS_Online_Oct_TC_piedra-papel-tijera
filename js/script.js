
const areaResultados = document.getElementById("resultados");
const puntosUsuario = document.getElementById("contador-usuario");
const puntosPc = document.getElementById("contador-ordenador");
const botones = document.querySelectorAll(".boton-jugada");
const opciones = ["piedra", "papel", "tijera"];
function jugadaPc() {
        let jugadaOrdenador = Math.floor(Math.random() * opciones.length);
        let resultado = opciones[jugadaOrdenador];
        return resultado;
        }
function comparar(jugadaUsuario, juegoPc) {
    if (jugadaUsuario === juegoPc) {
        return "Empate. Juega de nuevo";
    } else if (
        (jugadaUsuario === "piedra" && juegoPc === "tijera") ||
        (jugadaUsuario === "tijera" && juegoPc === "papel") ||
        (jugadaUsuario === "papel" && juegoPc === "piedra")
    ) {
        return "Gana Usted";
    } else {
        return "Pierde.";
       }
    }
let sumaPc = 0;
let sumaJugador = 0;
function sumaPuntos(resultado) {
    if (resultado === "Empate. Juega de nuevo") {
        return;
    } else if (resultado === "Gana Usted") {
        sumaJugador += 1;
    } else {
        sumaPc += 1;
    }
}
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let jugadaUsuario = boton.dataset.jugada;
        let juegoPc = jugadaPc();
        let resultado = comparar(jugadaUsuario, juegoPc);
        let emoticonoUsuario = emoji(jugadaUsuario);
        let emoticonoPc = emoji(juegoPc);
        sumaPuntos(resultado);
        areaResultados.innerHTML = `Tu jugada: ${jugadaUsuario}<span>${emoticonoUsuario}</span> <br> Jugada de la máquina: ${juegoPc}<span>${emoticonoPc}</span> <br> Resultado: ${resultado}`;
        puntosUsuario.textContent = `Tus puntos: ${sumaJugador}`;
        puntosPc.textContent = `Puntos de la máquina: ${sumaPc}`;
        console.log("Usuario:", jugadaUsuario, "| PC:", juegoPc, "| Resultado:", resultado);
    })
})
function emoji(jugada) {
    if (jugada === "piedra") {
        return "✊";
    } else if (jugada === "papel") {
        return "✋";
    } else {
        return "✌️";
    }
}

