'use strict'

function randomizer () {
    return Math.ceil(Math.random() * 6);
}

let first, second,
    total = 0,
    htmlString = '',
    htmlBlock = document.getElementById("result");


  for (let i = 0; i < 15; (i == 7 || i == 12) ? i+=2 : i++) {
    first = randomizer ();
    second = randomizer ();
    total += first + second;

    htmlString += "Шаг: " + i + ". Первая кость: " + first + " Вторая кость: " + second + "<br>";
    htmlString += (first === second) ? ("Выпал дубль. Число " + first + "<br>") :
    ((first < 3 && second > 4) || (second < 3 && first > 4)) ? "Разница составляет " + Math.abs(second - first) + "<br>" : '';
  }

  htmlString += ((total > 100) ? "Победа, вы набрали " : "Вы проиграли, у вас ") + total + " очков ";
  htmlBlock.innerHTML = htmlString;

// 14 хороших практик
// избегайте использования глобального контекста;
// используйте самозапускающуюся функцию;
// никогда не объявлять переменные без var/let;
// не забывать указывать 'use strict';
// помнить про разницу между '==' и '===' (строгое и не строгое равенство)
// всегда ставьте скобки и точки с запятой;
// использовать операторы && и || вместо сложных if
// избегать повторяемости кода;
// находить DOM элементы один раз и затем повторно использовать;
// склеивать массивы с помощью join;
// сокращайте длинные пути к значениям;
// уменьшайте количество ключевых var;
// передавать более 3 аргументов в функцию за раз;
// вместо простого for можно использовать for in или for off
