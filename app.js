
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Ingresa el nombre de un amigo.");
        return;
    }
    amigos.push(nombre);
    input.value = "";
    console.log(amigos);
}

function actualizarLista() {
    const lisdta = document.getElementById("listaAmigos");
    lisdta.innerHTML =  "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lisdta.appendChild(li);
    }
}

function sortearAmigo () {
    if (amigos.length === 0) {
        alert("No has ingresado el nombre de ningún amigo.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

const input = document.getElementById("amigo");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});