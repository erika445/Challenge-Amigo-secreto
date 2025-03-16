let arregloAmigo = [];

function agregarAmigo() {
    let amigoSecreto = document.querySelector("#amigo").value;
    
    if (amigoSecreto !== "") {
        arregloAmigo.push(amigoSecreto);

        let ul = document.getElementById("listaAmigos");
        ul.innerHTML = "";
        
        arregloAmigo.forEach(caracter => {
            let li = document.createElement("li");
            li.innerText = caracter;
            ul.appendChild(li);
        });

        document.querySelector("#amigo").value = "";
    } else {
        alert("No ingresó ningún valor");
    }
}

function sortearAmigo() {
    if (arregloAmigo.length === 0) {
        alert("No hay amigos para sortear. Agrega algunos nombres.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * arregloAmigo.length);
    let amigoSeleccionado = arregloAmigo[indiceAleatorio];

    document.getElementById("resul").innerText = "El amigo secreto es: " + amigoSeleccionado;

    
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    arregloAmigo = [];

    document.getElementById("Añadir").disabled = true;
    document.getElementById("amigo").disabled = true;

   
    let boton = document.getElementById("sortear");
    boton.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Volver a sortear`;
    boton.onclick = reiniciarSorteo;
}

function reiniciarSorteo() {
    document.getElementById("Añadir").disabled = false;
    document.getElementById("amigo").disabled = false;
    document.getElementById("resul").innerText = "";

    let boton = document.getElementById("sortear");
    boton.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo`;
    boton.onclick = sortearAmigo;
}
