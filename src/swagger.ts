import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
    definition: {
    openapi: '3.0.0',
    info: {
        title: 'DCP API',
        version: '1.0.0',
        description: 'API documentation for DCP project',
        },
    },
  apis: ['./src/routes/*.ts'], // Indique les fichiers où Swagger trouvera les annotations
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
