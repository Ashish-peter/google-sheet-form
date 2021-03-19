


const scriptURl = 'https://script.google.com/macros/s/AKfycby5qD_VFYEk7voX4PHuYv3A5gcAZ_LniXLfPnqXxXUxE1cTWhwPQva5nHQOagLgv6nfHw/exec';

const form = document.forms['google-sheet'];


form.addEventListener('submit',e =>{
  e.preventDefault()
  fetch(scriptURl,{method:'POST',body : new FormData(form)}).then(
    response=> alert("thanks for Contacting us..! we will contact you")
  ).catch(error=>console.error('Error!',error.message))
})
