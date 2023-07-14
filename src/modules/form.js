export default {
  init() {
    const forms = document.querySelectorAll('.toSend');

    forms.forEach((f) => {
      f.addEventListener('submit', formSended);

      async function formSended(e) {
        e.preventDefault();
        console.log('formSended', e);
  
        let formData = new FormData(f);
        console.log('formData', formData);
  
        let response = await fetch('mail.php', {
          method: 'POST',
          body:formData,
  
          
        });
  
        console.log('response', response);
        if(response.ok) {
          let result = await response.json;
         
          console.log('result', result, response);
          f.reset();
          f.classList.add('sended');
  
          setTimeout(() => {
            f.classList.remove('sended');;
          }, 3000);
  
        } else {
          console.log('ошибка');
        }
  
  
      }

    })
  }
}