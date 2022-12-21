 const my_element = document.querySelector('p');   // document todo arquivo  const= variavel constante

my_element.addEventListener('click', updateName); //my_element variavel que recebe a função click

function updateName() {      //Comandas fa função para adicionar o nome digitado.... let= variavel dinamica
 let nome = prompt('Digite novo nome: ');
 my_element.textContent = 'Nome da Pessoa: ' + nome;
}
