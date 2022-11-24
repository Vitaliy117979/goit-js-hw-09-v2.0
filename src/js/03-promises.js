// import Notiflix from 'notiflix';

// const refs = {
//   form: document.querySelector('.form'),
// };
// const formElements = {delay, step, amount, jsButton} = refs.form.elements

// refs.form.addEventListener('submit', preventDefaultForm);
// function preventDefaultForm(e) {
//   e.preventDefault()
//   setTimeout(() => {
//     createAmount(amount.value);
//   }, delay.value);
// }
// function createAmount(amount) {

//   for (let i = 1; i <= amount; i += 1) {
//     const delay = Number(step.value) * [i - 1] + Number(refs.form.elements.delay.value);
//     const position = [i];
//     console.log(delay);

//   createPromise(position, delay)

//     .then(({ position, delay }) => {
//       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
// }
// }
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay});
//         // Fulfill
//       } else {
//         reject({ position, delay});
//         // Reject
//       }
//     }, delay);
//   });
//   return promise;
// }

import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
  return promise;
}

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', preventDefaultForm);
function preventDefaultForm(e) {
  e.preventDefault();


  // const formElements = ({ delay, step, amount } = refs.form.elements);
  let delay = Number(e.currentTarget.delay.value)
  const step = Number(e.currentTarget.step.value)
  const amount = Number(e.currentTarget.amount.value)

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
          
        );
        console.log(delay.value);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
        delay += step;
  }
}


