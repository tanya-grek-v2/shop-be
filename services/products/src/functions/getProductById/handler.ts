import 'source-map-support/register';

import { defaultErrorResponse, formatJSONResponse, notFoundResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import db from '../../../db.config';

const getProductById = async (event) => {
  console.log('getProductById', event.pathParameters);

  try {
    const { rows } = await db.query(
      'SELECT * from products JOIN stocks ON products.id = stocks.product_id WHERE products.id = $1 LIMIT 1',
      [event.pathParameters.id]
    )

    if (!rows.length) {
      return notFoundResponse();
    }

    return formatJSONResponse({
      data: rows[0],
    });
  } catch {
    defaultErrorResponse();
  }
}

export const main = middyfy(getProductById);
