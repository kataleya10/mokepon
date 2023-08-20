function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)
}

function selecionarMascotaJugador() {
    alert("seleccionaste tu mascota")
}

window.addEventListener("load", iniciarJuego)