import 'source-map-support/register';

import {
  defaultErrorResponse,
  formatJSONResponse,
  invalidDataResponse,
} from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import db from '../../../db.config';

const createProduct = async (event) => {
  console.log('createProduct', event.body);

  const { title, description, price, image, count } = event.body;

  if (!title) {
    return invalidDataResponse();
  }

  try {
    const product = await db.query(
      'INSERT INTO products(title, description, price, image) VALUES($1, $2, $3, $4) RETURNING *',
      [title, description, price, image])
    console.log(product.rows[0])

    const stock = await db.query(
      'INSERT INTO stocks(product_id, count) VALUES($1, $2) RETURNING *',
      [product.rows[0].id, count])
    console.log(stock.rows[0])

    return formatJSONResponse({
      data: { ...product.rows[0], ...stock.rows[0] },
    });

  } catch (err) {
    console.log(err.stack);
    defaultErrorResponse();
  }
}

export const main = middyfy(createProduct);
