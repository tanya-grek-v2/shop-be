import 'source-map-support/register';

import { formatJSONResponse, notFoundResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import PRODUCTS_LIST from '../../mock';

const getProductById = async (event) => {
  const product = PRODUCTS_LIST.find(p => p.id === event.pathParameters.id);

  if (!product) {
    return notFoundResponse();
  }

  return formatJSONResponse({
    data: product,
  });
}

export const main = middyfy(getProductById);
