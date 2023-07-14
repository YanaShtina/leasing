export default {
  init() {
    const form = document.querySelector('.form__form');

    form.addEventListener('submit', formSended);

    async function formSended(e) {
      e.preventDefault();
      console.log('formSended', e);

      let formData = new FormData(form);
      console.log('formData', formData);

      let response = await fetch('mail.php', {
        method: 'POST',
        body:formData,

        
      });

      console.log('response', response);
      if(response.ok) {
        let result = await response.json;
       
        console.log('result', result, response);
        form.reset();
        form.classList.add('sended');

        setTimeout(() => {
          form.classList.remove('sended');;
        }, 3000);

      } else {
        console.log('ошибка');
      }


    }


    const formPopup = document.querySelector('.popup__form');

    formPopup.addEventListener('submit', formSended);

    async function formSended(e) {
      e.preventDefault();
      console.log('formSended', e);

      let formData = new FormData(formPopup);
      console.log('formData', formData);

      let response = await fetch('mail.php', {
        method: 'POST',
        body:formData,
      });

      console.log('response', response);
      if(response.ok) {
        let result = await response.json;
       
        console.log('result', result, response);
        formPopup.reset();
        formPopup.classList.add('sended');

        setTimeout(() => {
          formPopup.classList.remove('sended');;
        }, 3000);

      } else {
        console.log('ошибка');
      }


    }
  }
}