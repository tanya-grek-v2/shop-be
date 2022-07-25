CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products
(
    id uuid PRIMARY key default uuid_generate_v4(),
    title text NOT NULL,
    description text,
    price float(2)
);

CREATE TABLE stocks
(
    product_id uuid NOT NULL REFERENCES products UNIQUE,
    counts integer NOT null default 0
);

ALTER TABLE products
    ADD COLUMN image VARCHAR;

INSERT INTO products (title, description, price, image)
values (
           'ProductOne', 'Short Product Description1', 2.4, 'https://source.unsplash.com/random?sig=1'
       ), ('ProductTwo', 'Short Product Description2', 34, 'https://source.unsplash.com/random?sig=2'
       ), ('ProductThree', 'Short Product Description3', 45, 'https://source.unsplash.com/random?sig=3'
       ), ('Product4', 'Short Product Description4', 74, 'https://source.unsplash.com/random?sig=4'
       ), ('ProductO5', 'Short Product Description5', 23, 'https://source.unsplash.com/random?sig=5'
       ), ('Product6', 'Short Product Description6', 322.4, 'https://source.unsplash.com/random?sig=6'
       );

INSERT INTO stocks
SELECT id FROM products;

UPDATE stocks SET counts = 5;
