const express = require('express');
const cors = require('cors');
const imageRouter = require('./routers/imageRouter');
const categoriesRouter = require('./routers/categoriesRouter');
const authRouter = require('./routers/authRouter');
const contactRouter = require('./routers/contactRouter');

const app = express()

const port = 3000

//abilito cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

app.use('/', imageRouter);
app.use('/categories', categoriesRouter)
app.use('/contact', contactRouter)
app.use('', authRouter)//registriamo le rotte senza alcun prefisso


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})