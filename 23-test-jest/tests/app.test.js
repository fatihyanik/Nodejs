const {sum, arraySum} = require('../app');

describe('testing function sum', () =>{
    test('return right value', ()=>{
        const x = sum(1,3);
        expect(x).toBe(4);
    })
    test('result data type should be number', ()=>{
        const x = sum(2,6);
        //expect(x).toBeInstanceOf(Number)
        expect(typeof x).toBe('number')
    })
    test('sum function should except only numbers',()=>{
        expect(()=>{
            const x = sum('a', 'b')
        }).toThrow()
    })
})

describe('test unit arrSum', ()=>{
    test('test arrSum return right value', ()=>{
        const x = arraySum([2,3,8])
        expect(x).toBe(13)
    })
})