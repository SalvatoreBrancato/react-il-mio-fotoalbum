const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//####CREATE####
async function create(req, res){
    const datiInIngresso = req.body

    const newCategory = await prisma.category.create({
        data:{
            name: datiInIngresso.name
        }
    })

    return res.json(newCategory)
}

//####DESTROY####
async function destroy(req, res){
    const id = req.params.id
    await prisma.category.delete({
        where:{
            id: parseInt(id)
        }
    })
    return res.json({message: 'Categoria Eliminata'})
}


module.exports = {
    create,
    destroy
}