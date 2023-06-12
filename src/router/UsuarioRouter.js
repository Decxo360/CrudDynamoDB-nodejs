
import express from 'express'
import { UsuarioController } from '../controller/UsuarioController.js'

const UsuarioRouter = express.Router()

UsuarioRouter.post('/login', UsuarioController.login);

export default UsuarioRouter
