// Dados de exemplo
var dados = 
[
    {
        nome: "Projeto Um",
        atividades: [
            {
                id: 1,
                atividade: "Fazer layout um",
                responsavel: "Responsável Um",
                data: "10/10/2011"
            },
            {
                id: 2,
                atividade: "Fazer layout dois",
                responsavel: "Responsável Dois",
                data: "10/10/2012"
            },
            {
                id: 3,
                atividade: "Fazer layout três",
                responsavel: "Responsável Três",
                data: "10/10/2013"
            }
        ]
    },
    {
        nome: "Projeto Dois",
        atividades: [
            {
                id: 1,
                atividade: "Fazer layout um D",
                responsavel: "Responsável Um D",
                data: "10/10/2011"
            },
            {
                id: 2,
                atividade: "Fazer layout dois D",
                responsavel: "Responsável Dois D",
                data: "10/10/2012"
            },
            {
                id: 3,
                atividade: "Fazer layout três D",
                responsavel: "Responsável Três D",
                data: "10/10/2013"
            }
        ]
    }
]
// Criação da lista
var elementoPai = document.getElementById("Lista")
for(x in dados){ 
    // Nome do projeto
    var nome = document.createElement('h2')
    var textoNome = document.createTextNode(this.dados[x].nome)
    nome.appendChild(textoNome)
    elementoPai.appendChild(nome)
    // Criar a tabela de atividades
    var tabela = document.createElement('table')
    tabela.setAttribute('id', 'tabela' + x)
    elementoPai.appendChild(tabela)
        // Adicionar cabeçalho
    var cabecalho = document.createElement('tr')
    cabecalho.setAttribute('id', 'cabe' + x)
    document.getElementById('tabela' + x).appendChild(cabecalho)
            // Nome de cada coluna da tabela
    var colunaUm = document.createElement('th')
    var textoColunaUm = document.createTextNode("#")
    colunaUm.appendChild(textoColunaUm)
    document.getElementById('cabe' + x).appendChild(colunaUm)
    var colunaDois = document.createElement('th')
    var textoColunaDois = document.createTextNode("Atividade")
    colunaDois.appendChild(textoColunaDois)
    document.getElementById('cabe' + x).appendChild(colunaDois)
    var colunaTres = document.createElement('th')
    var textoColunaTres = document.createTextNode("Responsável")
    colunaTres.appendChild(textoColunaTres)
    document.getElementById('cabe' + x).appendChild(colunaTres)
    var colunaQuatro = document.createElement('th')
    var textoColunaQuatro = document.createTextNode("Data")
    colunaQuatro.appendChild(textoColunaQuatro)
    document.getElementById('cabe' + x).appendChild(colunaQuatro)
    var colunaCinco = document.createElement('th')
    colunaCinco.setAttribute('class', 'colunaBotao')
    document.getElementById('cabe' + x).appendChild(colunaCinco)
        // Adicionar os dados do projetos na tabela
    for(y in dados[x].atividades){
        var corpo = document.createElement('tr')
        corpo.setAttribute('id', 'corp' + x + y)
        document.getElementById('tabela' + x).appendChild(corpo)
        var linha = document.createElement('td')
        var textoLinha = document.createTextNode(this.dados[x].atividades[y].id)
        linha.appendChild(textoLinha)
        document.getElementById('corp' + x + y).appendChild(linha)
        var linhaUm = document.createElement('td')
        var textoLinhaUm = document.createTextNode(this.dados[x].atividades[y].atividade)
        linhaUm.appendChild(textoLinhaUm)
        document.getElementById('corp' + x + y).appendChild(linhaUm)
        var linhaDois = document.createElement('td')
        var textoLinhaDois = document.createTextNode(this.dados[x].atividades[y].responsavel)
        linhaDois.appendChild(textoLinhaDois)
        document.getElementById('corp' + x + y).appendChild(linhaDois)
        var linhaTres = document.createElement('td')
        var textoLinhaTres = document.createTextNode(this.dados[x].atividades[y].data)
        linhaTres.appendChild(textoLinhaTres)
        document.getElementById('corp' + x + y).appendChild(linhaTres)
        // Botões de ação de uma atividade da tabela
        var linhaQuatro = document.createElement('td')
        linhaQuatro.setAttribute('id', 'butao' + x + y)
        document.getElementById('corp' + x + y).appendChild(linhaQuatro)
            // Deletar
        var botaoDeletar = document.createElement('input')
        botaoDeletar.setAttribute('id', 'deletar' + x + y)
        botaoDeletar.setAttribute('type', 'button')
        botaoDeletar.setAttribute('value', 'DELETAR')
        botaoDeletar.setAttribute('onclick', "deletarAtividade('corp"+ x +""+ y +"')")
        document.getElementById('butao' + x + y).appendChild(botaoDeletar)
            // Editar
        var botaoEditar = document.createElement('input')
        botaoEditar.setAttribute('id', 'editar' + x + y)
        botaoEditar.setAttribute('type', 'button')
        botaoEditar.setAttribute('value', 'EDITAR')
        botaoEditar.setAttribute('onclick', "editar("+x+","+y+")")
        document.getElementById('butao' + x + y).appendChild(botaoEditar)             
    }  

    // Criando ultima linha da lista
    var linha = document.createElement('tr')
    linha.setAttribute('id', 'box' + x)
    document.getElementById('tabela' + x).appendChild(linha)
    document.getElementById('box' + x).appendChild(document.createElement('td'))
        // Input's texto
    for(var i=0; i < 3; i++){
        var box = document.createElement('td')
        box.setAttribute('id', 'boxPosi' + x + i)
        document.getElementById('box' + x).appendChild(box)
        var caixa = document.createElement('input')
        caixa.setAttribute('id', 'boxInpu' + x + i)
        caixa.setAttribute('type', 'text')
        document.getElementById('boxPosi' + x + i).appendChild(caixa)
    }
        // Botão salvar
    var box = document.createElement('td')
    box.setAttribute('id', 'boxPosi' + x)
    document.getElementById('box' + x).appendChild(box)
    var botaoSalvar = document.createElement('input')
    botaoSalvar.setAttribute('id', 'Salvar' + x + y)
    botaoSalvar.setAttribute('type', 'button')
    botaoSalvar.setAttribute('value', 'SALVAR')
    botaoSalvar.setAttribute('onclick', "salvarAtividade()")
    document.getElementById('boxPosi' + x).appendChild(botaoSalvar)       
}

function deletarAtividade(id) {
    document.getElementById(id).setAttribute('hidden', 'true')
}

function editar(num1, num2){
    document.getElementById('boxInpu'+num1+'0').setAttribute('value', this.dados[num1].atividades[num2].atividade)
    document.getElementById('boxInpu'+num1+'1').setAttribute('value', this.dados[num1].atividades[num2].responsavel)
    document.getElementById('boxInpu'+num1+'2').setAttribute('value', this.dados[num1].atividades[num2].data)
    var novoElem = document.createElement('div')
    var novoElemTxto = document.createTextNode(num1+""+num2)
    novoElem.appendChild(novoElemTxto)
    novoElem.setAttribute('id', 'editar')
    novoElem.setAttribute('hidden', 'true')
    document.body.appendChild(novoElem)
}

function salvarAtividade() {
    console.log(document.getElementById('editar').textContent)
}