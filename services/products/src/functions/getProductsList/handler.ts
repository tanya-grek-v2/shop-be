import 'source-map-support/register';

import { defaultErrorResponse, formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import db from '../../../db.config';

const getProductsList = async () => {
  console.log('getProductsList');
  try {
    const res = await db.query('SELECT * from products JOIN stocks ON products.id = stocks.product_id')

    return formatJSONResponse({
      data: res.rows,
    });
  } catch {
    defaultErrorResponse();
  }
}

export const main = middyfy(getProductsList);
