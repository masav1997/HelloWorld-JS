$(document).ready(function () {
	'use strict';
	console.log('main.js loaded');
	paper.install(window); //Библиотека Paper.js устанавливается в глобальную область видимости
    paper.setup(document.getElementById('mainCanvas')); //Библиотека подключается к холсту и готовится к рисованию
    
    var c = Shape.Circle (200, 200, 80); //Создаём круг, который будет фоном для текста
    c.fillColor = 'black';
    var text = new PointText (200,200); //Создаем текстовый объект
    text.justification = 'center'; //Определяем место вывода
    text.fillColor = 'white'; //Цвет
    text.fontSize = 20; //Размер текста
    text.content = 'hello world'; //Содержимое

    var tool=new Tool(); //создаем объект инструмента
    
    tool.onMouseDown = function(event) { //объекту закрепляем обработчик событий (нажатие на мышь)
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    }

	paper.view.draw(); //получает инструкцию нарисовать нечто на экране
});
