-- Point to bamazon_db--
USE bamazon_db;

-- Insert the 10 initial data to the DB --
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('Movado Mens Bold Watch', 'Fashion', 695.00, 5, "../images/movadoMensWatch.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('Coach Womens Tristen Signature Stainless Bracelet Glitz Watch', 'Fashion', 124.00, 15, "../images/coachWatch.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('Movado Womens Bold Watch', 'Fashion', 495.00, 25, "../images/movadoWomenWatch.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('R2D2 with Antlers Collectible Figure', 'Toys', 10.99, 115, "../images/R2D2.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('Mamma Mia! Here We Go Again', 'Movies', 14.94, 105, "../images/mamamia.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('The Lord of the Rings: The Motion Picture Trilogy', 'Movies', 13.94, 100, "../images/lord.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia', 'Books', 13.94, 50, "../images/narnia.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('Harry Potter Paperback Box Set (Books 1-7)', 'Books', 52.16, 55, "../images/harry.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('MacBook Pro', 'Electronics', 2400.00, 100, "../images/macbook.jpg", NOW(), NOW());
INSERT INTO Products (product_name, department_name, price, stock_quantity, picture, createdAt, updatedAt) VALUES ('iPad Pro', 'Electronics', 799.00, 100, "../images/ipad.jpg", NOW(), NOW());