const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


//index
async function index(req, res){

    //filtro published
    const filtroPublished = req.query.visibility
    const query={}
    if(filtroPublished == 'true'){
        query.where={
            visibilty: true
        }
    }

    //filtro titolo e descrizione
    const {title, description} = req.query
    if(title || description){
        query.where = {
            title:{
                contains: title
            },
            description:{
                contains: description
            }
        }      
    }

    //nessun filtro
    const data = await prisma.image.findMany({...query,
        include:{
            categories: {
                select:{
                    name: true
                }
            },

            comments:{
                select:{
                    email: true,
                    message: true,
                    createdAt: true
                }
            }
        }
    })
    return res.json(data)
}


//create
async function create(req, res){
    const datiInIngresso = req.body

    const newImage = await prisma.image.create({
        data:{
            title: datiInIngresso.title,
            description: datiInIngresso.description,
            image: datiInIngresso.image,
            visibility: datiInIngresso.visibility,
            categories: {
                connect: datiInIngresso.categories?.map((elem)=>{
                    return {id: elem}
                })
            },
            userId: datiInIngresso.userId,
        }
    }) 
    return res.json(newImage);
}

module.exports = {
    index,
    create,
}