
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateNumber(){
  
  let min = document.querySelector('#min').value 
  let max = document.querySelector('#max').value 
  let msgError = document.querySelector(".main__error")

  if (Number(max) < Number(min)){
    
    msgError.style.display= "block"
    
    document.querySelector('.main__result').innerHTML = ''
    msgError.innerHTML = 'o valor minimo não poder ser maior que o valor máximo'
    

  }else {
    document.querySelector('.main__result').innerHTML = getRandomIntInclusive(Number(min), Number(max));
    document.querySelector('.main__error').innerHTML = ''
    msgError.style.display= "none"
  }
}



