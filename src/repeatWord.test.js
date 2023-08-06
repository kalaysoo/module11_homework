import { repeatWord } from "../../utils/repeatWord";

describe("", () => {

    const word = 'word';
    const count = 3;

    it("The entered data is correct", () => {
        expect(repeatWord(word, count)).toBe('word1,word2,word3');
    }),
    it("The number of word repetitions is less than 1", () => {
        expect(repeatWord(word, 0)).toBe('Значение count должно быть больше 0');
    }),
    it("The word was not written", () => {
        expect(repeatWord('', count)).toBe('Слова нет. Пожалуйста напишите слово');
    }),
    it("All data is not correct", () => {
        expect(repeatWord('', 0)).toBe('Введенные данные не верны. Проверьте, что слово было введено и число повторений больше 0');
    });
});