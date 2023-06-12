import express from "express";
import UsuarioRouter from './src/router/UsuarioRouter.js'


const app = express()

app.use(express.json())

app.use('/usuario', UsuarioRouter)

app.listen(3030,()=>{
    console.log('RUNNIN ON PORT 3030');
})
