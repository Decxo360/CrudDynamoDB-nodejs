import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()

const header = {
    alg: 'HS256'
}

export const generarJwt = (payload) =>{
    console.log('entre');
    const token = jwt.sign(payload,process.env.SECRET_KEY_JWT)
    return token
}