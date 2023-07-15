import IMask from 'imask';

export default {
  init() {
    const forms = document.querySelectorAll('.toSend');
    const masks = document.querySelectorAll('.js-tel');
  
    if (!masks) return;

    forms.forEach((f) => {

      let complited = false;

      const maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false,
        placeholderChar: '_' 
      };
  
      /* блюр проверка */
  
      masks.forEach((m) => {
          const mask = IMask(m, maskOptions);
          m.addEventListener('blur', () => {
  
            if (mask.masked.isComplete === false && mask.masked.rawInputValue.length > 0) {
              m.closest(".input-wrap").classList.add('error');
              complited = false;
            } else if (mask.masked.isComplete === true && mask.masked.rawInputValue.length >= 0) {
              m.closest(".input-wrap").classList.remove('error');
              complited = true;
            } else if (mask.masked.isComplete === false && mask.masked.rawInputValue.length === 0) {
              m.closest(".input-wrap").classList.remove('error');
              complited = false;
            }
          }) 
      })

      /* отправка проверка */
     
      masks.forEach((m) => { 
        const mask = IMask(m, maskOptions);

        complited = mask.masked.isComplete;
      })

      const checkboxes = f.querySelectorAll('.checkbox');
      checkboxes.forEach((c) => {

        c.addEventListener('change', () => {
          const warningMessage =  c.closest('.policy__checkbox').nextElementSibling;
          if (c.checked !== true) {
            warningMessage.classList.add('active');
          } else {
            warningMessage.classList.remove('active');
          }
        })
      })

     
     
      async function formSended(e) {

        const input = f.querySelector('.input-wrap._tel');
        const checkbox = f.querySelector('.checkbox');
        e.preventDefault();

        if(complited === true && checkbox.checked === true) {
          let formData = new FormData(f);
  
          let response = await fetch('mail.php', {
            method: 'POST',
            body:formData,
          });
    
          if(response.ok) {
            let result = await response.json;
            f.reset();
            f.classList.add('sended');
    
            setTimeout(() => {
              f.classList.remove('sended');;
            }, 3000);
    
          } else {
            console.log('ошибка');
          }
        } else {
          if (complited !== true) {
            input.classList.add('error');
          } else {
            input.classList.remove('error');
          }
          

          if (checkbox.checked !== true) {
            f.querySelector('.check-policy').classList.add('active')
          } else {
            f.querySelector('.check-policy').classList.remove('active')
          }
          console.log('форма не заполнена')
        }

   

  
  
      }
      f.addEventListener('submit', formSended);
    })
  }
}