function drawTriangle(height, symbol) {
    // Перебираем строки треугольника
    for (let i = 1; i <= height; i++) {
        // Создаем строку, состоящую из символа, повторенного i раз
        let row = symbol.repeat(i);
        // Выводим строку в консоль
        console.log(row);
    }
}
drawTriangle(5, '*');

// version 2

function Triangle(height, symbol) {
    // Перебираем строки треугольника
    for (let i = 1; i <= height; i++) {
        // Создаем строку, состоящую из символа, повторенного i раз
        console.log(symbol);
        symbol = symbol + '*'
    }
}
Triangle(5, '*');