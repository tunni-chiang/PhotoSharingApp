-- JOINS
select
	u.username, 
	u.id, 
	p.id, 
	p.title, 
	p.description, 
	p.photopath, 
	p.created,
    p.fk_userid
from
	users u -- "u" is the alias
inner join posts p on u.id=p.fk_userid;
