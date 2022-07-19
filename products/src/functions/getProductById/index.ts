import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products/{id}',
        documentation: {
          summary: 'Get Product by id',
          description: 'The response from the lambda should be a full exact product',
          responses: {
              "description": "a pet to be returned",
          }
        }
      },
    }
  ]
}
