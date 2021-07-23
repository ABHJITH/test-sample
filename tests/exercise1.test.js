const exercise1 = require('../exercise1')

describe('fizzBuzz',()=>{
    it('Should return fizzBuzz when the input is divisible by 3 and 5',()=>{
        const result = exercise1.fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })

    it('Should return fizz when the input is only divisible by 3',()=>{
        const result = exercise1.fizzBuzz(3)
        expect(result).toBe('Fizz')
    })

    it('Should return Buzz when the input is only divisible by 5',()=>{
        const result = exercise1.fizzBuzz(5)
        expect(result).toBe('Buzz')
    })
    it('Should throw an error when the input is not a number',()=>{ 
        
        expect(()=>{exercise1.fizzBuzz('test')}).toThrow()
    })
    it('Should return the input when the input is not divisible by both 3 and 5',()=>{
        const result = exercise1.fizzBuzz(4)
        expect(result).toBe(4)
    })
})