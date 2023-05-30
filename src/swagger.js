import dotenv from "dotenv/config";
import { addGenre } from "./documents/genre.docs";

export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Movio APIs Document",
    description:
      "Movio: an movie app for renting and listing Movie in the store",
    termsOfService: "",
    contact: {
      name: "Leandre",
      email: "tuyambazeleandre@gmail.com",
      url: "https://leandredev.netlify.app/",
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`, // url
      description: "Local server", //
    },
    {
      url: "https://destructors-ecom-bc.onrender.com/", // url
      description: "Hosted version", // name
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        scheme: "bearer",
        in: "header",
      },
    },
  },
  paths: {
    "/api/v1/genre": {
      post: addGenre,
    },
  },
};
