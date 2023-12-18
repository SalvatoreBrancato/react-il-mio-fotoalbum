const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function index(req, res){
    const data = await prisma.contact.findMany({
        select:{
            email: true,
            message: true
        }
    })
    return res.json(data)
}


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
    index,
    create
}