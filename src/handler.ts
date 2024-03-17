/* eslint-disable prettier/prettier */
import { APIGatewayProxyResult } from 'aws-lambda';
export const hello = async () => {
  console.log("Hello World");
  return "Hello World";
};

export const goodbye = async () => {
  console.log("Goodbye World");
  return "Goodbye World";
};

export const getAllPatient = async (): Promise<APIGatewayProxyResult> => {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({ nome: "João", cognome: "Silvia", dataNascita: "01/01/1990"}),
  };

  return response;
}