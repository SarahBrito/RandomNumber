
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateNumber(){
  
  let min = document.querySelector('#min').value 
  let max = document.querySelector('#max').value 

  if (Number(max) < Number(min)){
    
    document.querySelector('.main__result').innerHTML = ''
   
    Swal.fire({
      
      icon: 'error',
      title: 'Oops...',
      text: 'O valor mínimo não pode ser maior que o valor máximo',
      confirmButtonColor: '#34e89e'
      
    })
    

  }else {
    document.querySelector('.main__result').innerHTML = getRandomIntInclusive(Number(min), Number(max));
  }
}



