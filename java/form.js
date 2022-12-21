var array=[];

function clique1(){
    var elemento = document.getElementById('nome');
    var digitado = elemento.value;
    elemento.value='';
    array.push(digitado);
   }

function clique2(){
    
    var mensagem=array.join('--');
    window.alert(mensagem);
    
}