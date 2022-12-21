/*
function minhafuncao(arg1, arg2){
	

	var soma = arg2 + arg1;
	var msg = 'A soma é igual a ';

	alert(msg + soma);

	var flag = true;

	if(flag)
		alert('verdadeiro')
	else(flag)
		alert('falso')

}
*/

function raizquadrada(num){
	var raiz = Math.sqrt(num);
	var res = 'a raiz de ' + num +' é ';

	alert(res + raiz)
}

function escreve( ){
	var texto = prompt('digite um texto qualquer : ')
	document.getElementById("minhaDiv").innerHTML = texto;
}
