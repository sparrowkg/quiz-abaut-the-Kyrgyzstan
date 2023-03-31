
const option = document.querySelector('form');
const btn = document.querySelector('button')
console.log(document.forms['quiz-form'])

btn.addEventListener('click', (e) => {
  e.preventDefault()

  const formData = new FormData(option)

  const city = formData.get('city')
  const people =formData.get('people')
  const square = formData.get('square')
  const state = formData.get('state')
    let result = 0
  if(city === 'capital1') 
    result ++ 
   if(people === 'people1') 
   result ++
   if(square === 'meters2') 
    result ++
   if(state === 'stats3') 
    result ++
  
  alert (`Ваш результат : ${result} из 4`)
  window.location.reload();
     })
 
