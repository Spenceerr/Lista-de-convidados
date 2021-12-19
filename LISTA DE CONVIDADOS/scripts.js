let input = document.getElementById("input-principal")
let button = document.getElementById("botao-adicionar")
let pessoa = document.getElementById("nome-pessoa-id")
let listaCompleta = document.getElementById("pessoas")

let arrayDePessoa = []
recarregarPessoas()

function mostrarPessoas() {
    let novali = ""

    arrayDePessoa.forEach((pessoa, index) => {

        
        novali = novali + `<li class="pessoa ${pessoa.confirmado == true ? "confirmado" : ""} ${pessoa.naoConfirmado == true ? "naoConfirmado" : ""}">
        <button class="botao-confirmado" onclick="confirmarPessoa(${index})">
            <i class="far fa-check-circle"></i>
    </button>
    
    <button class="botao-nao-confirmado" onclick="naoConfirmado(${index})">
    <i class="fas fa-window-close"></i>
    </button>  
    
    <p class="nome-pessoa ${pessoa.confirmado == true ? "confirmado" : ""} ${pessoa.naoConfirmado == true ? "naoConfirmado" : ""}" id="nome-pessoa-id">${pessoa.pessoa}</p>
        
    <button class="botao-apagar" onclick="apagarPessoa(${index})">
        <i class="fas fa-trash"></i>
    </button>
    
        
</li >
`
    })

    listaCompleta.innerHTML = novali

    localStorage.setItem("lista", JSON.stringify(arrayDePessoa))
}

function apagarPessoa(index){
    arrayDePessoa.splice(index, 1)
    mostrarPessoas()
    
}
function adicionarPessoa() {
    arrayDePessoa.push({
    pessoa: input.value,
    status: false
    })


    mostrarPessoas()
}

function confirmarPessoa(index){
    arrayDePessoa [index].confirmado = !arrayDePessoa [index].confirmado
    mostrarPessoas()
}

function naoConfirmado (index){
    arrayDePessoa [index].naoConfirmado = !arrayDePessoa [index].naoConfirmado
    mostrarPessoas()
}

function recarregarPessoas(){
    let meusconvidados = localStorage.getItem("lista")
    
    arrayDePessoa = JSON.parse(meusconvidados)
    
    mostrarPessoas()
}

button.addEventListener("click", adicionarPessoa)


function ClearFields() {

    document.getElementById("input-principal").value = "";
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#botao-adicionar");
      
      btn.click(one);
    
    }
  });