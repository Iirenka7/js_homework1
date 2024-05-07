function pow(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'Обидва аргументи мають бути числами';
    }
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2, 3));
