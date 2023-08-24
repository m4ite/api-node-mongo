function validaCpf(cpf)
{
    // 1
    if (!cpf) return false;
        const cpfSplit = cpf.replaceAll('.', '').replace('-', '')


    //2
    if (cpfSplit.length != 11) return false
        var isSequencial = false


    //3
    // for (let i = 1; i < cpfSplit.length; i++)
    // {
    //     if (cpfSplit[i] == cpfSplit[i - 1])
    //         isSequencial = true
    // }


    //3 - correct
    var aux = 0
    for (let i = 1; i < cpfSplit.length; i++)
    {
        if (cpfSplit[i] == cpfSplit[i - 1])
            aux ++

        if(aux > 3)
            isSequencial = true
    }


    
    if (isSequencial) return false
        var somaDig1 = 0;


    //4
    for (let i = 0; i < cpfSplit.length - 2; i++)
    {
        somaDig1 += (Number(cpfSplit[i]) * (10 - i));
    }


    
    if ((11 - (somaDig1 % 11)) != cpfSplit[9])
        return false


    //5
    var somaDig2 = 0;
    for (let i = 0; i < cpfSplit.length - 1; i++)
    {
        somaDig2 += Number(cpfSplit[i]) * (11 - i);
    }


    if ((11 - (somaDig2 % 11)) != cpfSplit[10])
        return false


    return true
}


module.exports = { validaCpf }