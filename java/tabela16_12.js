var texto;
var arraytabela=[];
function buscar(){
    var elemento = document.getElementById('pesquisar');
    var digitado = elemento.value;
    elemento.value='';
    texto.push(digitado);
   }

function clique2(){
    
    var mensagem=texto;
    window.alert(mensagem);
    
}

function listartable(){
    var tabela=document.getElementById('tabela');
    
        for(linha of tabela){
        var elemento=linha[2];
        
        }
}
