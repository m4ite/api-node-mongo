const Person = require('../models/Person');

class PersonController
{
    static async getAll (req, res)
    {
        try
        {
            const people = await Person.find()
            return res.status(200).send({ data: people })
        }

        catch (error)
        {
            return res.status(500).send({ error: error })
        }
    }




    static async getById(req, res)
    {
        const { id } = req.params

        try {
            const person = await Person.findById(id)
            return res.status(200).json(person)
        }

        catch (error) {
            res.status(400).json({ error: error })
        }
    }





    static async createPerson (req, res)
    {
        const { name, lastname, salary } = req.body

        if (!name || !lastname || !salary)
            return res.status(400).send({ message: 'Dados inválidos' })

        const person =
        {
            name: name,
            lastname: lastname,
            salary: salary
        }

        try {
            const p = await Person.create(person);
            return res.status(201).send({ message: 'Inserido com sucesso', body: p })
        }

        catch (error) {
            return res.status(500).send({ error: error })
        }
    }





    static async updateById (req, res)
    {
        const { id } = req.params;
        const person = req.body;

        if (!id)
            return res.status(400).send({ message: "No id provider" })

        if (!person.salary)
            return res.status(400).send({ message: "No salary provider" })

        try
        {
            const newPerson = await Person.findByIdAndUpdate(id, { salary: person.salary })
            return res.status(201).send(newPerson);
        }

        catch (error)
        {
            return res.status(500).send({ error: error });
        }
    }





    static async deleteById(req, res)
    {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Nenhum Id foi fornecido" })

        try
        {
            await Person.findByIdAndRemove(id);
            return res.status(200).send({ message: "Pessoa deletada com sucesso" })
        }
        catch (error)
        {
            console.log(error);
            return res.status(500).send({ message: "Algo deu errado" })
        }
    }

}


module.exports = PersonController;