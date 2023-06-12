import  UsuarioService  from "../service/UsuarioService.js"

const service = new UsuarioService()

export const UsuarioController = {
    login: async(request, response) => {
        const { correo, contrasena } = request.body
        const usuario = await service.getUsuario({ correo, contrasena })
        return response.status(200).json(
            {
                success: true,
                data: usuario?.Items
            }
        )
    },
}

