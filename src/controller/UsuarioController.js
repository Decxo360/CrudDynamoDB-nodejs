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
    register: async(req,res)=>{
        const {nombre,apellido,email,contrasena,nick} = req.body
        try{
            const result = await service.createUsuario({nombre,apellido,email,contrasena,nick})
            return res.status(200).json({
                success:true,
                data: result
            })
        }catch (e){
            return res.status(400).json({
                success:false,
                err:e
            })
        }
    }
}

