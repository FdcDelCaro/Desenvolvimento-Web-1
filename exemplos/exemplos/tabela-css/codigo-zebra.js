
/* 
	referência: http://www.toprated.com.br/funcao-javascript-para-zebrar-tabelas
*/

function zebra_em_jquery( id, classe )
{
	var tab = "table#" + id;
	$( "table#id"
}


function zebra( id, classe )
{
	var tabela = document.getElementById( id ); // pega a tabela que tem o ID
	var linhas = tabela.getElementsByTagName( "tr" ); // pega todos elementos tr da tabela
	for ( i = 0; i < linhas.length; i++ ) // busca todas linhas
	{
		if( ( i % 2 ) == 0) // se o índice for par, então atribui a zebra
		{
			linhas[i].className = classe; // atribuindo o estilo à linha
		}
	}
}

