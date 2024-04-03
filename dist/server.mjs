import {
  registerForEvent
} from "./chunk-3GX77LLB.mjs";
import {
  errorHandler
} from "./chunk-EOXGF5FC.mjs";
import {
  checkIn
} from "./chunk-QSB6XPWE.mjs";
import {
  createEvent
} from "./chunk-57BE55XU.mjs";
import "./chunk-677O5SV4.mjs";
import {
  getAttendeeBadge
} from "./chunk-4Z2FRCEW.mjs";
import {
  getEventAttendees
} from "./chunk-V6RPLYMA.mjs";
import {
  getEvent
} from "./chunk-Z5YNGW27.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass-in",
      description: "especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass-in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
var PORT = 3333;
app.listen({ port: PORT, host: "0.0.0.0" }).then(() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
