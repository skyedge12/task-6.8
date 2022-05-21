userTextField.addEventListener('click', function (event) { 
    event.preventDefault(); 
const userText = prompt('Измените текст ссылки');
const userTextField = document.querySelector('#userTextField');
userTextField.textContent = userText;
})