import { toThePowerOf, capitalizeNames } from './array-map.js';
describe('raises each number to exponent power', () => {
    it('^2', () => {
        const input = [1, 2, 12];
        const expected = [1, 4, 144];
        const actual = toThePowerOf(input, 2);
        expect(actual).toEqual(expected);
    });
    
    it('^3', () => {
        const input = [1, 2, 12];
        const expected = [1, 8, 1728];
        const actual = toThePowerOf(input, 3);
        expect(actual).toEqual(expected);
    });

    it('^5', () => {
        const input = [1, 2, 12];
        const expected = [1, 32, 248832] ;
        const actual = toThePowerOf(input, 5);
        expect(actual).toEqual(expected);
    });
});

describe('Capitalizes names', () => {
    it('capitalizes all names', () => {
        const input = [
            { name: 'francis', age: 36, twitter: '@ri' },
            { name: 'eliza', age: 34, twitter: '@betmarej' },
            { name: 'milton', age: 54, twitter: '@hek' },
            { name: 'devin', age: 22, twitter: '@mawumsic' },
        ];
        const expected = [{ name: 'Francis', age: 36, twitter: '@ri' },
            { name: 'Eliza', age: 34, twitter: '@betmarej' },
            { name: 'Milton', age: 54, twitter: '@hek' },
            { name: 'Devin', age: 22, twitter: '@mawumsic' }];

        const actual = capitalizeNames(input);
        expect(actual).toEqual(expected);
    });

});