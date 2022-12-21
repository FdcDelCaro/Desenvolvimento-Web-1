var pessoa = 'Carlos'
var my_array = ['a', 'b', 99, true, '44', pessoa, undefined, [1,2,3], {nome:'marcelo', idade:33}, ''];


console.log('tamanho:', my_array.length);
console.log('array, indice[2]:', my_array[2]);
console.log('array, indice[-1]:', my_array[-1]);
console.log('array, indice[-3]:', my_array[-3]);

my_array.push('novo elemento');
console.log('adicionado novo:', my_array);

var remove_ultimo = my_array.pop();
console.log('array, apos removido:', my_array);
console.log('removido:', remove_ultimo)

var remove_primeiro = my_array.shift();
console.log('array, apos removido:', my_array);
console.log('removido:', remove_primeiro)
var posicao=2, qtde=3;
var removidos = my_array.splice(posicao, qtde);
console.log('array, apos removido:', my_array);
console.log('removidos:', removidos);

for(var id=0; id<my_array.length; id++ ) {
   console.log(`my_array[${id}]: ${my_array[id]}`);
}

for( elem of my_array ) {
   console.log(`elemento: ${elem}`);
}

var unindo = my_array.join(' - ');
console.log('array.join:', unindo );