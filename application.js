function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function generateNumber(){
  
  let min = document.querySelector('#min').value
  let max = document.querySelector('#max').value
  document.querySelector('.main__result').innerHTML = getRandomIntInclusive(Number(min), Number(max));
  
  if (Number(max) < Number(min)){
    max = document.querySelector('#max').value = ''
    document.querySelector('.main__result').innerHTML = ''
    document.querySelector('.main__error').innerHTML = 'o valor minimo não poder ser maior que o valor máximo'
}else {
  document.querySelector('.main__error').innerHTML = ''
}

}



