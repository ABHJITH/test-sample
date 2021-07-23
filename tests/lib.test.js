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

describe('greet', ()=>{
    it('Should return the greeting message',()=>{
        const result = lib.greet('Abhi')
        expect(result).toMatch(/Abhi/)
    })
})

describe('getCurrency',()=>{
    it('Should return supported currencies',() =>{
        const result = lib.getCurrencies();

        // Too genaral
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too Specific
        expect(result[0]).toBe('USD')
        expect(result[1]).toBe('AUD')
        expect(result[2]).toBe('EUR')
        expect(result.length).toBe(3)

        // Proper way
        expect(result).toContain('USD')
        expect(result).toContain('AUD')
        expect(result).toContain('EUR')

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR','AUD','USD']))
    })
})

describe('getProduct',()=>{
    it('Should return the product with given id', ()=>{
        const result  = lib.getProduct(1);
        // expect(result).toEqual({id:1, price:10});
        expect(result).toMatchObject({id:1 ,price: 10});
        expect(result).toHaveProperty('id',1)
    })
})

describe('registerUser', ()=>{
    it('Should throw an error if username is falsy',()=>{
        
    const args = [null, undefined, NaN, '', 0, false]

    args.forEach(element => {
        expect(()=>{lib.registerUser(element)}).toThrow()
    });
    })

    it('Should return an userObj if a valid object is passed',()=>{
        const result = lib.registerUser('Abhi');
        expect(result).toMatchObject({username: 'Abhi'})
        expect(result.id).toBeGreaterThan(0)
    })
})

