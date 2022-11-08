INSERT INTO Users (sku, name, lastname, phone, country, email, password, avatar, admin)
VALUES (1, 'Alejandro Jose', 'Sanz Gonzalez', 1122533898, 'ARG', 'alejandrosanz@globalhome.com.ar', '1234567890', 'default-user-image.png', 1);

INSERT INTO Users (sku, name, lastname, phone, country, email, password, avatar, admin)
VALUES (2, 'Camila S', 'Sanchez S', 1111112222, 'ARG', 'camilaandreasanabria@gmail.com', '1234567890', 'default-user-image.png', 0);


INSERT INTO Categories (sku, name)
VALUES (1, 'Todos');

INSERT INTO Categories (sku, name)
VALUES (2, 'Arreglos florales');

INSERT INTO Categories (sku, name)
VALUES (3, 'Globos y dulces');

INSERT INTO Categories (sku, name)
VALUES (4, 'Desayunos');


INSERT INTO Seasons (sku, name)
VALUES (1, 'Todo el año');

INSERT INTO Seasons (sku, name)
VALUES (2, 'Feliz día');

INSERT INTO Seasons (sku, name)
VALUES (3, 'Amor');

INSERT INTO Seasons (sku, name)
VALUES (4, 'Cumpleaños');

INSERT INTO Seasons (sku, name)
VALUES (5, 'Día del padre');

INSERT INTO Seasons (sku, name)
VALUES (6, 'Día de la madre');

INSERT INTO Seasons (sku, name)
VALUES (7, 'Día del niño');


INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (1, 'Cono de 12 flores y 10 chocolates', 'Cono color negro 100% artesanal, sosteniendo de hermosas 12 rosas y 10 chocolates Ferrero Rocher, acompañado de un letrero deseando un -Feliz Día-, y un gran lazo rojo', 2000, 2, 2, 'cono-de-rosas.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (2, 'Caja sorpresa de 9 flores y 13 chocolates', 'Caja sorpresa con un color base negro, contenedora de 9 rosas rojas en forma de corazón, acomopañado de 13 deliciosos chocolaes Ferrero Rocher', 2500, 2, 3, 'box-flores-chocolates.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (3, 'Box de 12 flores y 27 chocolates', 'Super box color simil madera, contenedora de 12 frescas rosas rojas y de 27 insaciables chocolates Ferrero Rocher, acompañado de un letrero deseando un -Feliz Cumpleaños-, y un gran lazo rojo', 5000, 2, 4, 'superbox-flores-chocolates.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (4, 'Cono chico de dulces y un globo', 'Cono color rosa chico, con topping de variedad de dulces y golocinas. Acompañado de un globo y un gran lazo rojo', 1500, 3, 3, 'cono-globos-dulces.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (5, 'Mini box de dulces y globos chicos', 'Pequeño box acompañado de muchas golocinas y dulces. Decorado con un fondo de globos chicos y un hermoso globo corona', 2500, 3, 6, 'box-globos-dulces-chico.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (6, 'Box de dulces y globo cristal personalizable', 'Pequeño pero sorprendente box relleno de variedad de golocinas, con un top de un globo gigantes de PVC cristal totalmente personalizable', 1000, 3, 4, 'desayuno-completo.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (7, 'Desayuno completo de cumpleaños', 'Bandeja para sorprender con un desayuno para tu hija, novia, esposa o madre en su dia más especial. Incluye sandwich, medias lunas, jugo y torta, así como toda la decoración de la foto', 3000, 4, 4, 'desayuno-completo.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (8, 'Desayuno full de cumpleaños', 'Bandeja para sorprender con un desayuno para tu hija, novia, esposa o madre en su dia más especial. Incluye sandwich, medias lunas, jugo y yogurt, así como toda la decoración de la foto', 9500, 4, 4, 'desayuno-full.jpg');

INSERT INTO Products (sku, name, description, price, category_sku, season_sku, image)
VALUES (9, 'Mega desayuno de cumpleaños', 'Bandeja para sorprender con un desayuno para tu hijo, novio, esposo o padre en su dia más especial. Incluye sandwich, medias lunas, jugo y yogurt, así como toda la decoración de la foto', 7000, 4, 4, 'desayuno-padres.jpg');