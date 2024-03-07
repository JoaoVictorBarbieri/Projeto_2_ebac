const form = document.getElementById('form-registre');

const contatos = [];
const telefones = [];

var linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
})

function adicionaLinha(){
    const inputNome = document.getElementById('contato_telefone');
    const inputNumero = document.getElementById('numero_telefone');

    if (contatos.includes(inputNome.value)){
        alert(`O contato ${inputNome.value} ja foi adicionado`)
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputNumero.value);

        var linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}<td>`;
        linha += '</tr>'
    }
    inputNome.value = '';
    inputNumero.value = '';
}