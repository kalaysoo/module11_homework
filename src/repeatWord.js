export function repeatWord(word, count) {
    let words = '';
    if (word === '' && count > 1) {
        words = 'Слова нет. Пожалуйста напишите слово';
    } else if (!(word === '') && count < 1) {
        words = 'Значение count должно быть больше 0';
    } else if (word === '' && count < 1) {
        words = 'Введенные данные не верны. Проверьте, что слово было введено и число повторений больше 0';
    } else {
        for (let i = 1; i <= count; i++) {
            if (i === count) {
                words += word + i;
            } else words += word + i + ',';
        }
    }
    return words;
}