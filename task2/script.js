const  consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', 
  (event) => {
        alert('Служит для вывода информации в консоль');
    })


const Alert = document.querySelector('#alert');
Alert.addEventListener('click', 
   (event) => {
    alert('Внимание! Внимание!');
})


const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', 
    (event) => {
    prompt('Служит для ввода пользователем текста в консоль, но текст на странице не изменяется');
})