//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome.trim() === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    amigos.push(nome);
    document.getElementById("amigo").value = "";

    let itemLista = document.createElement("li");
        itemLista.textContent = nome;
        document.getElementById("listaAmigos").appendChild(itemLista);   
}

function sortearAmigo() {
   let resultadoDiv = document.getElementById("resultado");
   resultadoDiv.innerHTML = "";   
   
    if (amigos.length < 2) {
        resultadoDiv.innerHTML = "<p>Preciso de pelo menos dois amigos para o sorteio!</p>";
        return;
    }

    let amigosCopia = [...amigos];
   

for (let i = amigos.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [amigosCopia[i], amigosCopia[j]] = [amigosCopia[j], amigosCopia[i]];
}

for (let i = 0; i < amigos.length; i++) {
    let amigoSecreto = ( i + 1) % amigos.length;
    resultadoDiv.innerHTML += `<p>${amigos[i]} tirou ${amigos[amigoSecreto]}</p>`;
}

}
