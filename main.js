const form = document.getElementById('form-funcionalidade');
let linhas = '';
const imgAprovado = `<img src="/images/aprovado.png" alt="emoji festejando"</img>`;
const imgReprovado = `<img src="/images/reprovado.png" alt="emoji triste"</img>`;
const resultadoAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const resultadoReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota minima: "))
const atividades = [];
const notas = [];



form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    AtualizaTabela();
    calculaMedia();


});

function addLinha()
{
    const inputNomeAtividade = document.getElementById('materia');
    const inputNotaAtividade = document.getElementById('nota');

    if(atividades.includes(inputNomeAtividade.value))
    {
        inputNomeAtividade.style.border = `2px solid red`;
        alert(`A matéria ${inputNomeAtividade.value} ja foi adicionada.`)
    }
    else
    {
        inputNomeAtividade.style.border = 'none';
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? `${imgAprovado}` : `${imgReprovado}`}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }



    
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    
    atualizaMedia();


}

function AtualizaTabela()
{
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMedia()
{
    const mediaFinal = calculaMedia();
    document.getElementById('media').innerHTML = mediaFinal;
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? resultadoAprovado : resultadoReprovado;
    

}

function calculaMedia()
{
    let acumulador = 0;
    for(let i = 0; i < notas.length; i++)
    {
        acumulador = acumulador + notas[i] ;
    }
    return (acumulador / notas.length).toFixed(2);
    
}