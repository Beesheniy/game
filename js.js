// getElementById() - Поиск элемента по идентификатору элемента

// innerHTML() - Изменение внутреннего HTML-кода элемента

// createElement() - Создание элемента HTML

// appendChild() - Добавление элемента HTML

// removeChild() - Удаление элемента HTML

function startGame(){
    gameLoop()
}

var count = 0;
var personVis = false;
var score = 0; // переменная подсчёта баллов

function gameLoop(){
    personVis = !personVis // переключатель видимости
    if (personVis == true){
        var classToset = 'character visible'
    }
    else{
        var classToset = 'character hidden'

    }
    var gamezone = document.getElementById('gamezone');

    for( i = 0 ; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = 'Персонаж' // добавление ко всем дивкам текста Персонаж

        gamezone.children[i].onclick = function(){score-=2}
    }

    var randomNum = Math.floor(Math.random()*8) +1; // Выбор случайного числа

    gamezone.children[randomNum-1].innerHTML = 'Лишний' // прикрепление слово лишний к рандомному блоку

    // при нажатии на лишнего добавляется 1 балл

    gamezone.children[randomNum-1].onclick = function(){score+=1}

    
    
    gamezone.children[randomNum-1].className = classToset + ' naruto' // применение внешнего вида к лишнему


    count++;
    if (count < 20){
        setTimeout (gameLoop, personVis ? 500 : 500)
    }
    else{
        alert('Твой счёт ' + score);
    }
    
    
    
  
    
}

function score(){
    document.getElementById('score').innerHTML;
    
}