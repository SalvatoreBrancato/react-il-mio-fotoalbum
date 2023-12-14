const express = require('express');
const cors = require('cors');
const imageRouter = require('./routers/imageRouter');
const categoriesRouter = require('./routers/categoriesRouter')

const app = express()

const port = 3000

//abilito cors
app.use(cors());

app.use(express.json());

app.use('/', imageRouter);
app.use('/categories', categoriesRouter)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})