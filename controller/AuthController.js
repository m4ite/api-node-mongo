const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class AuthController {
    static async register(req, res) {
        const { name, email, password } = req.body

        if (!name || !email || !password)
            return res.status(400).send({ mesage: "Nome, email ou senha não enviados" })


        const userVerify = await User.findOne({ email })
        if (userVerify)
            return res.status(400).send({ message: "Email já cadastrado no sistema" })


        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = new User(
            {
                name,
                email,
                password: passwordHash
            })


        try {
            await user.save()
            return res.status(201).send({ message: "Usuário criado com sucesso" })
        }
        catch (error) {
            return res.status(500).send({ message: "Algo deu errado" })
        }
    }

    static async login(req, res) {

        const { email, password } = req.body

        if (!email || !password)
            return res.status(400).send({ message: "Email ou senha não enviados" })

        try {
            const user = await User.findOne({ email })
            if (!user)
                return res.status(400).send({ message: "Nenhum usuário encontrado" })

            if (!await bcrypt.compare(password, user.password))
                return res.status(400).send({ message: "Nenhum usuário encontrado" })

            const secret = process.env.secret

            const token = jwt.sign(
                { id: user.id },
                secret,
                { expiresIn: '2 days' }
            )

            return res.status(200).send({ token: token })
        }

        catch (error) {
            return res.status(500).send({ message: "Algo deu errado" })
        }
    }


    static async delete(req, res)
    {
        const { email } = req.body

        if (!email)
            return res.status(400).send({ message: "Email não enviados" })

        try
        {
            const user = await User.findOne({ email })
            if (!user)
                return res.status(400).send({ message: "Nenhum usuário encontrado" })

            User.findByIdAndDelete(user.id)

            return res.status(200).send({ message: "Usuário deletedo" })
        }
        catch (error) {
            return res.status(500).send({ message: "Algo deu errado" })
        }
    }
}



module.exports = AuthController