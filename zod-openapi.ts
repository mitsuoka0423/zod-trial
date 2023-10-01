import { z } from "zod";
import { createDocument, extendZodWithOpenApi } from "zod-openapi";

extendZodWithOpenApi(z);

const jobId = z.string().openapi({
  description: "The job ID",
  example: "1234",
});

const title = z.string().openapi({
  description: "The title of the job",
  example: "Senior Developer",
});

const document = createDocument({
  openapi: "3.0.0",
  info: {
    title: "APIドキュメント",
    version: "1.0.0",
  },
  paths: {
    "/jobs": {
      get: {
        responses: {
          200: {
            description: "200 OK",
            content: {
              "application/json": { schema: z.object({ a: z.string() }) },
            },
            headers: z.object({
              "header-key": z.string(),
            }),
          },
        },
      },
      post: {
        responses: {
          200: {
            description: "200 OK",
            content: {
              "application/json": { schema: z.object({ a: z.string() }) },
            },
            headers: z.object({
              "header-key": z.string(),
            }),
          },
        },
        requestBody: {
          content: {
            "application/json": {
              schema: z.object({
                title: z.string(),
                description: z.string(),
              }),
            },
          },
        },
      },
    },
  },
});

console.log(JSON.stringify(document, null, 2));
