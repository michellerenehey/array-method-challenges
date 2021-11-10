import { powerOfTwo } from './array-map.js'

it('squares numbers', () => {
    const input = [1, 2, 3]
    const expected = [ 1, 4, 9 ]
    const actual = powerOfTwo(input) 
    expect(actual).toEqual(expected)
})


if('')