import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        cors: true,
        documentation: {
          summary: 'Get Products List',
          description: 'The response from the lambda should be a full array of products',
          responses: {
              "description": "a list to be returned",
          }
        }
      },
    }
  ]
}
