const form = document.getElementById('form-registre');
const limpar = document.getElementById('botaoLimpar');

const contatos = [];
const telefones = [];

var linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
    atualizarNumeroTotal();
})

function adicionaLinha(){
    const inputNome = document.getElementById('contato_telefone');
    const inputNumero = document.getElementById('numero_telefone');

    if (contatos.includes(inputNome.value)){
        alert(`O contato ${inputNome.value} ja foi adicionado`);
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputNumero.value);

        var linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}<td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarNumeroTotal(){
    const numeroTotal = document.getElementById('numero_cadastrado');
    numeroTotal.innerHTML = contatos.length;
}