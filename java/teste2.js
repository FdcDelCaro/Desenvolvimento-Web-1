function principal(){
    var repeticoes;

    repeticoes=window.prompt('digite a quatidade');
    
    
    for(var i=0;i<repeticoes*100;i=i+1){ // +2 para pular de dois em dois
       
        if(pular_i(i)){ // ignora os indices
            continue;
        } 
        if(condicao_parada(i)) break;
        mensagem_mstrar(i);
}
}
    
principal()



function mensagem_mstrar(id){
    mensagem = 'pizzaria está aberta';
    var msg= String(id);
    msg += "- " + mensagem;
    console.log(msg)
}


// lacos de repeticoes

function pular_i(param_1){
    // acessa o banco de daods
    // existem informacoes que sao secretas..
   ret =  (param_1==3 || 
           param_1==5 ||
           param_1==10 ||
           param_1==13);
   return ret;
}

function condicao_parada(param2)
    {
    
    ret = (param2==20);
    return ret; 
    
    }