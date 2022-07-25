import PRODUCTS_LIST from './mock';
import getProductsList from './functions/getProductsList';
import '@libs/handlerResolver';

jest.mock('@libs/handlerResolver');

test('getProductsList', () => {
  expect(getProductsList).toBe({
    data: PRODUCTS_LIST,
  });
});
