// Dados de exemplo e conexão
var requestURL = './myjson.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

//Desenvolvimetno da atividade
request.onload = function() {
  var dados = request.response
  console.log(dados)

  // Elemento pai
  var elementoPai = document.getElementById('root')

  // Área para cada projeto
  for(var i=0; i<dados.projetos.length; i++){
    var area = document.createElement('div')
    area.setAttribute('id', 'projeto-' + dados.projetos[i].id)
    elementoPai.appendChild(area)
  }

  // Título do projeto
  for(var i=0; i<dados.projetos.length; i++){    
    var eleTitulo = document.createElement('h2')
    eleTitulo.setAttribute('id', 'titulo-projeto-' + dados.projetos[i].id)
    var titulo = dados.projetos[i].nome
    var txtTitulo = document.createTextNode(titulo)
    eleTitulo.appendChild(txtTitulo)
    document.getElementById('projeto-' + dados.projetos[i].id).appendChild(eleTitulo)
  }

  // Crinado a tabela
  for(var i=0; i<dados.projetos.length; i++){
    var tabela = document.createElement('table')
    tabela.setAttribute('id', 'tabela-projeto-' + dados.projetos[i].id)
    document.getElementById('projeto-' + dados.projetos[i].id).appendChild(tabela)
  }

  // Criando tabela para adicionar nova atividade
  for(var i=0; i<dados.projetos.length; i++){
    var tabela = document.createElement('table')
    tabela.setAttribute('id', 'tabela-projeto-' + dados.projetos[i].id + '-novo')
    document.getElementById('projeto-' + dados.projetos[i].id).appendChild(tabela)
  }

  // Criando elementos do cabeçalho da tabela
  var colunas = ['Tarefa', 'Responsável', 'Prazo', 'Status']
  for(var i=0; i<dados.projetos.length; i++){
    // Abrindo uma linha
    var cabecalho = document.createElement('tr')
    cabecalho.setAttribute('id', 'cabecalho-projeto-'  + dados.projetos[i].id)
    document.getElementById('tabela-projeto-' + dados.projetos[i].id).appendChild(cabecalho)
    
    // Adicionando elementos    
    for(var j=0; j<colunas.length; j++){
        var coluna = document.createElement('th')
        var textoColuna = document.createTextNode(colunas[j])
        coluna.appendChild(textoColuna)
        document.getElementById('cabecalho-projeto-'  + dados.projetos[i].id).appendChild(coluna)
    }
    
    // Coluna dos botões
    var coluna = document.createElement('th') 
    document.getElementById('cabecalho-projeto-'  + dados.projetos[i].id).appendChild(coluna)
  }

  // Criando elementos necessários na tabela para adicioanr uma nova atividade
  for(var i=0; i<dados.projetos.length; i++){
    // Abrindo uma linha
    var cabecalho = document.createElement('tr')
    cabecalho.setAttribute('id', 'cabecalho-projeto-' + dados.projetos[i].id + '-novo')
    document.getElementById('tabela-projeto-' + dados.projetos[i].id + '-novo').appendChild(cabecalho)
    
    // Adicionando elementos    
    for(var j=0; j<colunas.length; j++){
      if(colunas[j]=='Status'){
        var coluna = document.createElement('th')
        var textoColuna = document.createTextNode('A fazer')
        coluna.appendChild(textoColuna)
        document.getElementById('cabecalho-projeto-' + dados.projetos[i].id + '-novo').appendChild(coluna)
      } else {
        var coluna = document.createElement('th')
        coluna.setAttribute('id', 'coluna-novo-' + dados.projetos[i].id+'-'+colunas[j])        
        document.getElementById('cabecalho-projeto-' + dados.projetos[i].id + '-novo').appendChild(coluna)
        var novoInput = document.createElement('input')
        if(colunas[j]=='Prazo'){
          novoInput.setAttribute('type','date')
        }        
        novoInput.setAttribute('id', 'input-novo-projeto-' + dados.projetos[i].id+'-coluna-'+colunas[j])
        document.getElementById('coluna-novo-' + dados.projetos[i].id+'-'+colunas[j]).appendChild(novoInput)
      }
    }

    // Coluna dos botões
    var coluna = document.createElement('th')
    coluna.setAttribute('id', 'coluna-novo-' + dados.projetos[i].id+'-botao')        
    document.getElementById('cabecalho-projeto-' + dados.projetos[i].id + '-novo').appendChild(coluna)
    var novoInput = document.createElement('input')
    novoInput.setAttribute('type', 'button')
    novoInput.setAttribute('value', 'Adicionar')
    IdSalvar = dados.projetos[i].id
    novoInput.setAttribute('onclick', 'adicionarAtividade("' + IdSalvar + '")')
    novoInput.setAttribute('id', 'input-novo-projeto-' + dados.projetos[i].id+'-coluna-botao')
    document.getElementById('coluna-novo-' + dados.projetos[i].id+'-botao').appendChild(novoInput)
  }

  // Adicionando linhas com informações
  for(var i=0; i<dados.projetos.length; i++){
    // Criando a caixa da linha
    for(var j=0; j<dados.projetos[i].atividades.length; j++){
      var corpo = document.createElement('tr')
      corpo.setAttribute('id', 'corpo-projeto-'  + dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id)
      document.getElementById('tabela-projeto-' + dados.projetos[i].id).appendChild(corpo)
      
      // Colocando as informaçoes da coluna nome      
      var linhaNome = document.createElement('th')
      linhaNome.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-nome')
      document.getElementById('corpo-projeto-'  + dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id).appendChild(linhaNome)  
      var linhaNomeInput = document.createElement('input')
      linhaNomeInput.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-nome')
      linhaNomeInput.setAttribute('value', dados.projetos[i].atividades[j].nome)
      linhaNomeInput.setAttribute('readonly', 'true')
      document.getElementById('linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-nome').appendChild(linhaNomeInput)
      
      // Colocando as informaçoes da coluna responsavel      
      var linhaResponsavel = document.createElement('th')
      linhaResponsavel.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-responsavel')
      document.getElementById('corpo-projeto-'  + dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id).appendChild(linhaResponsavel)  
      var linhaResponsavelInput = document.createElement('input')
      linhaResponsavelInput.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-responsavel')
      linhaResponsavelInput.setAttribute('value', dados.projetos[i].atividades[j].responsavel)
      linhaResponsavelInput.setAttribute('readonly', 'true')
      document.getElementById('linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-responsavel').appendChild(linhaResponsavelInput)
      
      // Colocando as informaçoes da coluna prazo      
      var linhaPrazo = document.createElement('th')
      linhaPrazo.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-prazo')
      document.getElementById('corpo-projeto-'  + dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id).appendChild(linhaPrazo)  
      var linhaPrazoInput = document.createElement('input')
      linhaPrazoInput.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-prazo')
      linhaPrazoInput.setAttribute('value', dados.projetos[i].atividades[j].prazo)
      linhaPrazoInput.setAttribute('type', 'date')
      linhaPrazoInput.setAttribute('readonly', 'true')
      document.getElementById('linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-prazo').appendChild(linhaPrazoInput)
      
      // Colocando as informaçoes da coluna status
      var linhaStatus = document.createElement('th')
      linhaStatus.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-status')
      document.getElementById('corpo-projeto-'  + dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id).appendChild(linhaStatus)  
      var linhaStatusInput = document.createElement('select')
      linhaStatusInput.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-option')     
      document.getElementById('linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-status').appendChild(linhaStatusInput)
      
      // Colocando as informaçoes de Status
      var tiposDeStatus = ['A fazer','Fazendo', 'Feito']
      for(var k=0; k<tiposDeStatus.length; k++){
        var opcaoStatus = document.createElement('option')
        var opcaoTxt = document.createTextNode(tiposDeStatus[k])
        opcaoStatus.appendChild(opcaoTxt)
        if(dados.projetos[i].atividades[j].status == tiposDeStatus[k]){
          opcaoStatus.setAttribute('selected', 'true')
        }
        document.getElementById('linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-option').appendChild(opcaoStatus)
      }      

      // Colocando as informaçoes da coluna botão      
      var linhaBotao = document.createElement('th')
      linhaBotao.setAttribute('id', 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao')      
      document.getElementById('corpo-projeto-'  + dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id).appendChild(linhaBotao)
      var tipoDeBotoes = ['Editar', 'Excluir', 'Salvar']
      for(var k=0; k<tipoDeBotoes.length; k++){
        Obotao = document.createElement('input')
        Obotao.setAttribute('type', 'button')
        Obotao.setAttribute('value', tipoDeBotoes[k])        
        if(tipoDeBotoes[k] == 'Editar'){
          var idNome = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-nome'
          var idResponsavel = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-responsavel'
          var idPrazo = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-prazo'
          var idBotaoEditar = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao-editar'
          var idBotaoSalvar = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao-salvar'
          Obotao.setAttribute('onclick', 'editarAtividade("'+idNome+'","'+idResponsavel+'","'+idPrazo+'","'+idBotaoEditar+'","'+idBotaoSalvar+'")')
          Obotao.setAttribute('id','linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao-editar')
        } 
        if(tipoDeBotoes[k] == 'Salvar'){
          var idNome = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-nome'
          var idResponsavel = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-responsavel'
          var idPrazo = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-input-prazo'
          var idBotaoEditar = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao-editar'
          var idBotaoSalvar = 'linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao-salvar'
          Obotao.setAttribute('onclick', 'salvarAtividade("'+idNome+'","'+idResponsavel+'","'+idPrazo+'","'+idBotaoEditar+'","'+idBotaoSalvar+'")')
          Obotao.setAttribute('hidden', 'true')
          Obotao.setAttribute('id','linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao-salvar')
        }
        if(tipoDeBotoes[k] == 'Excluir'){
          var IdTemp = 'corpo-projeto-'  + dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id;
          Obotao.setAttribute('onclick', 'excluirAtividade("' + IdTemp + '")')
        }               
        document.getElementById('linha-projeto-'+ dados.projetos[i].id + '-atividade-' + dados.projetos[i].atividades[j].id +'-coluna-botao').appendChild(Obotao)
      }
    }  
  }
}

// Função para excluir atividade
function excluirAtividade(idExcluir){
  document.getElementById(idExcluir).setAttribute('hidden', 'true')
}

// Função para editar atividade
function editarAtividade(idNome, idResponsavel, idPrazo, idBotaoEditar, idBotaoSalvar){
  document.getElementById(idNome).removeAttribute('readonly')
  document.getElementById(idResponsavel).removeAttribute('readonly')
  document.getElementById(idPrazo).removeAttribute('readonly')
  document.getElementById(idBotaoEditar).setAttribute('hidden', 'true')
  document.getElementById(idBotaoSalvar).removeAttribute('hidden')  
}

// Função para salvar atividade
function salvarAtividade(idNome, idResponsavel, idPrazo, idBotaoEditar, idBotaoSalvar){
  document.getElementById(idNome).setAttribute('readonly','')
  document.getElementById(idResponsavel).setAttribute('readonly','')
  document.getElementById(idPrazo).setAttribute('readonly','')
  document.getElementById(idBotaoEditar).removeAttribute('hidden')
  document.getElementById(idBotaoSalvar).setAttribute('hidden', 'true')  
}

// Função para adicionar nova atividade
var cronometro = 999
function adicionarAtividade(idProjeto) {
  cronometro++
  var corpo = document.createElement('tr')
  corpo.setAttribute('id', 'corpo-projeto-'  + idProjeto + '-atividade-' + cronometro)
  document.getElementById('tabela-projeto-' + idProjeto).appendChild(corpo)
  
  // Colocando as informaçoes da coluna nome      
  var linhaNome = document.createElement('th')
  linhaNome.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-nome')
  document.getElementById('corpo-projeto-'  + idProjeto + '-atividade-' + cronometro).appendChild(linhaNome)  
  var linhaNomeInput = document.createElement('input')
  linhaNomeInput.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-nome')
  var nomeTemp = document.getElementById('input-novo-projeto-' + idProjeto+'-coluna-Tarefa').value
  linhaNomeInput.setAttribute('value', nomeTemp)
  linhaNomeInput.setAttribute('readonly', 'true')
  document.getElementById('linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-nome').appendChild(linhaNomeInput)
  
  // Colocando as informaçoes da coluna responsavel      
  var linhaResponsavel = document.createElement('th')
  linhaResponsavel.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-responsavel')
  document.getElementById('corpo-projeto-'  + idProjeto + '-atividade-' + cronometro).appendChild(linhaResponsavel)  
  var linhaResponsavelInput = document.createElement('input')
  linhaResponsavelInput.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-responsavel')
  var reponsavelTemp = document.getElementById('input-novo-projeto-' + idProjeto+'-coluna-Responsável').value
  linhaResponsavelInput.setAttribute('value', reponsavelTemp)
  linhaResponsavelInput.setAttribute('readonly', 'true')
  document.getElementById('linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-responsavel').appendChild(linhaResponsavelInput)
  
  // Colocando as informaçoes da coluna prazo      
  var linhaPrazo = document.createElement('th')
  linhaPrazo.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-prazo')
  document.getElementById('corpo-projeto-'  + idProjeto + '-atividade-' + cronometro).appendChild(linhaPrazo)  
  var linhaPrazoInput = document.createElement('input')
  linhaPrazoInput.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-prazo')
  var prazoTemp = document.getElementById('input-novo-projeto-' + idProjeto+'-coluna-Prazo').value
  linhaPrazoInput.setAttribute('value', prazoTemp)
  linhaPrazoInput.setAttribute('type', 'date')
  linhaPrazoInput.setAttribute('readonly', 'true')
  document.getElementById('linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-prazo').appendChild(linhaPrazoInput)
  
  // Colocando as informaçoes da coluna status
  var linhaStatus = document.createElement('th')
  linhaStatus.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-status')
  document.getElementById('corpo-projeto-'  + idProjeto + '-atividade-' + cronometro).appendChild(linhaStatus)  
  var linhaStatusInput = document.createElement('select')
  linhaStatusInput.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-option')     
  document.getElementById('linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-status').appendChild(linhaStatusInput)
  
  // Colocando as informaçoes de Status
  var tiposDeStatus = ['A fazer','Fazendo', 'Feito']
  for(var k=0; k<tiposDeStatus.length; k++){
    var opcaoStatus = document.createElement('option')
    var opcaoTxt = document.createTextNode(tiposDeStatus[k])
    opcaoStatus.appendChild(opcaoTxt)
    if('A fazer' == tiposDeStatus[k]){
      opcaoStatus.setAttribute('selected', 'true')
    }
    document.getElementById('linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-option').appendChild(opcaoStatus)
  }      

  // Colocando as informaçoes da coluna botão      
  var linhaBotao = document.createElement('th')
  linhaBotao.setAttribute('id', 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao')      
  document.getElementById('corpo-projeto-'  + idProjeto + '-atividade-' + cronometro).appendChild(linhaBotao)
  var tipoDeBotoes = ['Editar', 'Excluir', 'Salvar']
  for(var k=0; k<tipoDeBotoes.length; k++){
    Obotao = document.createElement('input')
    Obotao.setAttribute('type', 'button')
    Obotao.setAttribute('value', tipoDeBotoes[k])    
    if(tipoDeBotoes[k] == 'Editar'){
      var idNome = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-nome'
      var idResponsavel = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-responsavel'
      var idPrazo = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-prazo'
      var idBotaoEditar = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao-editar'
      var idBotaoSalvar = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao-salvar'
      Obotao.setAttribute('onclick', 'editarAtividade("'+idNome+'","'+idResponsavel+'","'+idPrazo+'","'+idBotaoEditar+'","'+idBotaoSalvar+'")')
      Obotao.setAttribute('id','linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao-editar')
    } 
    if(tipoDeBotoes[k] == 'Salvar'){
      var idNome = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-nome'
      var idResponsavel = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-responsavel'
      var idPrazo = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-input-prazo'
      var idBotaoEditar = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao-editar'
      var idBotaoSalvar = 'linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao-salvar'
      Obotao.setAttribute('onclick', 'salvarAtividade("'+idNome+'","'+idResponsavel+'","'+idPrazo+'","'+idBotaoEditar+'","'+idBotaoSalvar+'")')
      Obotao.setAttribute('hidden', 'true')
      Obotao.setAttribute('id','linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao-salvar')
    }
    if(tipoDeBotoes[k] == 'Excluir'){
      var IdTemp = 'corpo-projeto-'  + idProjeto + '-atividade-' + cronometro;
      Obotao.setAttribute('onclick', 'excluirAtividade("' + IdTemp + '")')
    }               
    document.getElementById('linha-projeto-'+ idProjeto + '-atividade-' + cronometro +'-coluna-botao').appendChild(Obotao)
  }
}
