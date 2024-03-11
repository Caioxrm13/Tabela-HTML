function adicionarItem(){
    //obter os valores de entrada
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    //validar se os campos estão preenchidos
    if(!nome || !valor || !quantidade){
        alert("Preencha todos os campos")
        return;
    }

    //Criar e atribuir as celulas os valores digitados
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0)
    var celulaValor = novaLinha.insertCell(1)
    var celulaQuantidade = novaLinha.insertCell(2)

    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;
}