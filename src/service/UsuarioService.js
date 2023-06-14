import { v4 } from "uuid";
import { client } from "../config/config.js"
import { ScanCommand, PutItemCommand, DeleteItemCommand } from "@aws-sdk/client-dynamodb"

class UsuarioService{
    async getUsuario(data){
        console.log(data);
        const params = {
            TableName: 'Usuario',
            FilterExpression: 'email = :email AND contrasena = :contrasena',
            ExpressionAttributeValues:{
                ':email' : {S:data.correo},
                ':contrasena' : {S:data.contrasena}
            }
        }
        const commnad = new ScanCommand(params)
        const result = await client.send(commnad)
        return result
        
    }
    async createUsuario(data){
        
        const params ={
            TableName:"Usuario",
            Item: {
                idUsuario: {S:v4()},
                nombre: {S:data.nombre},
                apellido:{S:data.apellido},
                email:{S:data.email},
                contrasena:{S:data.contrasena},
                nick:{S:data.nick}
            }
        }
        const command = new PutItemCommand(params)
        const result = await client.send(command)
        console.log(result);
        return result
    }

    async deleteUsuario(id){
        const params = {
            TableName:"Usuario",
            key: {
                id: id
            }
        }
        const command = new DeleteItemCommand(params)
        const result = await client.send(command)
        return result
    }
}

export default UsuarioService