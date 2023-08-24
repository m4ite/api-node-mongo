const { validaCpf } = require("../../commom/cpf")


describe('Validador de cpf', () =>
{

    it('deve retornar false por canta do tamanho ser != de 11 caracteres', () =>
    {
        const cpf = '134654'
        const res = validaCpf(cpf)

        expect(res).toBe(false)
    })


    // -------------------------------------------------

    it('deve retornar false por repetir caracteres', () =>
    {
        const cpf = '1111'
        const res = validaCpf(cpf)

        expect(res).toBe(false)
    })

    // -------------------------------------------------
    
    it('deve retornar false por conta do primeiro digito verificador', () =>
    {
        const cpf = ''
        const res = validaCpf(cpf)

        expect(res).toBe(false)
    })







    it('deve retornar true', () =>
    {
        const cpf = '10100251986'
        const res = validaCpf(cpf)

        expect(res).toBe(true)
    })
})