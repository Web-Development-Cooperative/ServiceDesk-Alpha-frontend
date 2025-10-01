import { mapArrNumberToString } from './mapArrNumberToString';

describe('mapArrNumberToString', () => {
	test('Пусто массив', () => {
		expect(mapArrNumberToString([])).toEqual([]);
	});
	test('Массив с корректными значениями', () => {
		expect(mapArrNumberToString([1, 2, 3])).toEqual(['1', '2', '3']);
	});
	test('Массив с не корректными значениями', () => {
		expect(mapArrNumberToString([1, NaN, 3])).toEqual(['1', '3']);
	});
});
