document.title = 'js test'
const box = document.getElementById('box')

// чтобы реагировать на нажатие кнопки, записываем функцию в свойство onclick.
// Эта функция будет вызываться при каждом нажатии на кнопку. Часто говорят,
// что эта функция обрабатывает событие
console.log(box)
console.log(getColor())

function getColor() {
  const colors = [
    '#49A16C', '#064236',
    '#ED6742', '#F498AD',
    '#1A5AD7', '#AFC9DA',
    '#FFD829', '#282A2E',
    '#5E6064', '#E6E6E6'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

function changeColor() {
    // меняем цвет кнопки, на которой произошло событие. кнопка доступна с помощью
    // ключевого слова this
    this.style = `background-color: ${getColor()};`;
  };
  
  const buttons = document.getElementsByTagName('button');
  console.log(buttons)
  for (let i = 0; i < buttons.length; ++i) {
    const button = buttons[i];
    // к каждой кнопке привязываем обработчик
    button.addEventListener('click', changeColor); 
    // обратите внимание, что мы не вызываем
    // функцию changeColor, а только пишем ее имя
  }

