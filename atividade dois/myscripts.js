function inputErro(id) {
    document.getElementById(id).style.borderColor = 'red'
}

function inputOk(id){
    document.getElementById(id).style.borderColor = 'green'
}

function verificar() {
    var NaoVazio = ['Nome', 'Sobrenome', 'Data', 'RG', 'CPF', 'Rua', 'Bairro', 'N', 'Cidade', 'Estado']
    var verificador = true
    for(var idName in NaoVazio){
        var texto = document.getElementById(NaoVazio[idName]).value
        if(texto == ""){
            inputErro(NaoVazio[idName])
            console.log(NaoVazio[idName]+" Erro")
            verificador = false
        } else { 
            inputOk(NaoVazio[idName])                       
            if(NaoVazio[idName] == 'Data'){
                if((texto[2] != '/') || (texto[5] != '/')){
                    inputErro(NaoVazio[idName])
                    console.log(NaoVazio[idName]+" Erro")
                    verificador = false
                } else {
                    var possibilidades = [0,1,3,4,6,7,8,9]
                    for(var i=0; i<possibilidades.length; i++){
                        if(texto[possibilidades[i]] > 9){
                            inputErro(NaoVazio[idName])
                            console.log(NaoVazio[idName]+" Erro")
                            verificador = false
                        }
                    }
                }
            }
            if(NaoVazio[idName] == 'RG'){
                if((texto[3] != '.') || (texto[7] != '.')){
                    inputErro(NaoVazio[idName])
                    console.log(NaoVazio[idName]+" Erro")
                    erificador = false
                } else {
                    var possibilidades = [0,1,2,4,5,6,8,9,10]
                    for(var i=0; i<possibilidades.length; i++){
                        if(texto[possibilidades[i]] > 9){
                            inputErro(NaoVazio[idName])
                            console.log(NaoVazio[idName]+" Erro")
                            verificador = false
                        }
                    }
                }
            }
            if(NaoVazio[idName] == 'CPF'){
                if((texto[3] != '.') || (texto[7] != '.') || (texto[11] != '.')){
                    inputErro(NaoVazio[idName])
                    console.log(NaoVazio[idName]+" Erro")
                    erificador = false
                } else {
                    var possibilidades = [0,1,2,4,5,6,8,9,10,12,13]
                    for(var i=0; i<possibilidades.length; i++){
                        if(texto[possibilidades[i]] > 9){
                            inputErro(NaoVazio[idName])
                            console.log(NaoVazio[idName]+" Erro")
                            verificador = false
                        }
                    }
                }
            }            
        }
    }
    return verificador
}