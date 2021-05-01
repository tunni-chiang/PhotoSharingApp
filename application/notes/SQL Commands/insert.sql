-- select * from users;

-- insert into tableName (columns,...,columns) values ();
-- insert into users (`username`, `email`, `password`, `created`)
-- values ("testuser", "test@mail.com", "lnetmianoir", now());

-- Right click table and "Copy to Clipboard"
INSERT INTO `csc317db`.`users`
(`username`,
`email`,
`password`,
`created`)
VALUES
("testuser05",
"test05@mail.com",
"lnetmianoir",
now());
