"use strict";var startNum=prompt("Введите число");function haes(){var t=0,a=0,r=[];for(a=t;0<=a&&(0==a&&r.push(startNum),startNum%2==0?startNum/=2:startNum=3*startNum+1,t<startNum&&(t=startNum),r.push(startNum),1!=startNum);a++);alert("Результат:\n        Последовательность: ".concat(r.join(" "),"   // объединяет числа массива в одну строку\n        Шагов:   ").concat(a+1,"  \n        Вершина:  ").concat(t))}haes(startNum);startNum > verh) verh = startNum;
    pos.push(startNum); // записываем все числа , которые были получены по условиям цикла

    if (startNum == 1) break;
  }

  alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:\n        \u041F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: ".concat(pos.join(" "), "   // \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0447\u0438\u0441\u043B\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443\n        \u0428\u0430\u0433\u043E\u0432:   ").concat(steps + 1, "  \n        \u0412\u0435\u0440\u0448\u0438\u043D\u0430:  ").concat(verh)); // вычисление максимального значения
}

;
haes(startNum);