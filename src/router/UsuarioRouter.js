
import express from 'express'
import { UsuarioController } from '../controller/UsuarioController.js'

const UsuarioRouter = express.Router()

UsuarioRouter.post('/login', UsuarioController.login);

UsuarioRouter.post('/register', UsuarioController.register);

export default UsuarioRouter
