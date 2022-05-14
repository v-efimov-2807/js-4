/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arrayNumbers = data.split(',');
    let resultString = '';

    for (let i = 0; i < arrayNumbers.length; i++) {
        arrayNumbers[i] = +arrayNumbers[i];
    }

    arrayNumbers = arrayNumbers.sort((a, b) => a - b);

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (i === arrayNumbers.length - 1) {
            resultString += arrayNumbers[i];
            break;
        }
        resultString += arrayNumbers[i] + ',';
    }

    return resultString;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let resultArray = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] < 100) {
            resultArray.push(data[i]);
        } else {
            continue;
        }
    }

    return resultArray;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let resultArray = [];

    for (let i = 0; i < array1.length; i++) {
        resultArray.push(array1[i], array2[i]);
    }

    return resultArray;
}
