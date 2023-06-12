import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { config } from "dotenv";

config()

export const client = new DynamoDB({
    region:"process.env.AWS_REGION",
    credentials:{
        accessKeyId: process.env.DIEGO_ACCESS_KEY,
        secretAccessKey:process.env.DIEGO_ACCESS_SECRET
    }
})