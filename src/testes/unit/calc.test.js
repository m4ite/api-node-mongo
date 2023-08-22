const { Soma, Sub, Mult, Divide } = require("../../commom/calc")



describe('Calculadora', () =>
{
    it('deve retornar o resultado da soma de 1+2', () =>
    {
        const res = Soma(1,2);
        expect(res).toBe(3);
    })

    it('deve retornar o resultado da subtração de 2-1',() =>
    {
        const res = Sub(2,1)
        expect(res).toBe(1)
    })

    it('deve retornar o resultado da multilicação de 2*3', () =>
    {
        const res = Mult(2,3)
        expect(res).toBe(6)
    })

    it('deve retornar o resultado da divisão de 10/2', () =>
    {
        const res = Divide(10,2)
        expect(res).toBe(5)
    })
})