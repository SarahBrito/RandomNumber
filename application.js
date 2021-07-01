function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function gerarNumero(){
  let n1 = document.querySelector('#n1').value
  let n2 = document.querySelector('#n2').value
  document.querySelector('#result').innerHTML = getRandomIntInclusive(Number(n1), Number(n2));
}



