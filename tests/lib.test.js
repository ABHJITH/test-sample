const lib = require('../lib')
 

describe('absolute', ()=>{
    it('Should return  a positive number if input is positive',()=>{
        const result = lib.absolute(1)
        expect(result).toBe(1)
    })
    
    it('Should return a positive number if input is negative ', ()=>{
        const result = lib.absolute(-1)
        expect(result).toBe(1)
    })
    
    it('Should return zero if the input is zero',()=>{
        const result = lib.absolute(0)
        expect(result).toBe(0)
    })
})
