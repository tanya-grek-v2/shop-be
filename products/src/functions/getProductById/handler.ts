import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import PRODUCTS_LIST from '../../mock';

const getProductById = async (event) => {
  const product = PRODUCTS_LIST.find(p => p.id === event.pathParameters.id);

  return formatJSONResponse({
    data: product,
  });
}

export const main = middyfy(getProductById);
