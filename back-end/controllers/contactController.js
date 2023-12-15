const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function create(req, res){
    const datiInIngresso = req.body

    const newContact = await prisma.contact.create({
        data:{
            email: datiInIngresso.email,
            message: datiInIngresso.message
        }
    })

    return res.json(newContact)
}


module.exports = {
    create
}