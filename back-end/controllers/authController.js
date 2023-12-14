const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const AuthError = require('../exception/AuthError');


//####REGISTER####
async function register(req, res){
    
    const sanitizedData = req.body
    console.log(sanitizedData)

    // devo criptare la password in ingresso prima di salvarla nel db
    // il secondo (salt) paramentro indica quante volte che crypto la password 

    sanitizedData.password = await bcrypt.hash(sanitizedData.password, 10)

    //salvo i dati ricevuti nel database
    const user = await prisma.user.create({
        data:{
            ...sanitizedData
        },
        select:{
            id: true,
            name: true,
            email: true,
            role: true 
        }
    });

    //genero il token
    const token = jsonwebtoken.sign(user, process.env.JWT_SECRET,{
        expiresIn: '1h'
    })

    res.json({user, token})
}


//####REGISTER####
async function login(req, res, next){
    //recupero i dati inseriti dell'utente
    const{email, password} = req.body

    //controllo che ci sia l'utente con quella email
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    });

    //controllo che la password sia corretta
    const passMatch = await bcrypt.compare(password, user.password)

    if(!passMatch){
        return next(new AuthError("Password errata"));
    }

    const token = jsonwebtoken.sign(user, process.env.JWT_SECRET, {
        expiresIn: "2h"
    })

    //rimuovo la password dall'ogetto che restituisco (ma non dal database) per evitare di mostrarla in chiaro
    delete user.password

    res.json({user, token})

}

module.exports = {
    register,
    login
}