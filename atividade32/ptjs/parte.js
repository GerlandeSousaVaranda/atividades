function escreve( ){
  var texto = prompt('digite um texto qualquer : ');
  document.getElementById("modalcorpo").innerHTML = texto;
}


var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus(prompt);
})