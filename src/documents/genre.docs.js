export const addGenre = {
  tags: ["Genre"],
  summary: "Create genre",
  description: "Create a movie genre",
  parameters: [],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              required: true,
            },
          },
          example: {
            name: "Romantic",
          },
        },
      },
    },
  },
  consumes: ["application/json"],
  responses: {
    201: {
      description: "Genre added successfull",
    },

    500: {
      description: "Server error",
    },
  },
};
