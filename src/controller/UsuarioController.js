import { generarJwt } from "../helper/GeneradorJWT.js"
import UsuarioService from "../service/UsuarioService.js"
import { compareSync } from "bcrypt"

const service = new UsuarioService()

export const UsuarioController = {
    login: async (request, response) => {
        // try {
            const { correo, contrasena } = request.body
            const usuario = await service.getUsuario({ correo, contrasena })
            console.log(usuario.Items[0]);
            const contrasenaValida = compareSync(contrasena, usuario.Items[0]?.contrasena?.S)
            if (!contrasenaValida) {
                response.status(404).json({
                    success: false,
                    msg: 'Error en autentificacion'
                })
            }

            const payload = {
                id: usuario.Items[0].idUsuario.S,
                correo: usuario.Items[0].email.S
            }

            const token = generarJwt(payload)

            response.status(200).json({
                success: true,
                data: {
                    nombre: usuario.Items[0].nombre.S,
                    apellido: usuario.Items[0].apellido.S,
                    nick: usuario.Items[0].nick.S,
                    id: usuario.Items[0].idUsuario.S,
                    email: usuario.Items[0].email.S
                },
                token
            })
        // } catch (e) {
        //     response.status(400).json({
        //         success: false,
        //         err: e
        //     })
        // }
    },
    register: async (req, res) => {
        const { nombre, apellido, email, contrasena, nick } = req.body
        try {
            const result = await service.createUsuario({ nombre, apellido, email, contrasena, nick })
            return res.status(200).json({
                success: true,
                data: result
            })
        } catch (e) {
            return res.status(400).json({
                success: false,
                err: e
            })
        }
    }
}

