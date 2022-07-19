import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import PRODUCTS_LIST from '../../mock';

const getProductsList = async () => {
  return formatJSONResponse({
    data: PRODUCTS_LIST,
  });
}

export const main = middyfy(getProductsList);
