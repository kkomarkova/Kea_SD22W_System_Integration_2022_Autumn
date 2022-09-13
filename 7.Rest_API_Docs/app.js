import express from "express";
const app = express();

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes*.js'], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJsdoc(options);

import userRouter from "./users.js";
app.use(userRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log('Server is running')
})