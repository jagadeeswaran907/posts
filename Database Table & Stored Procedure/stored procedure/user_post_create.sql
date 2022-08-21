CREATE DEFINER=`root`@`localhost` PROCEDURE `user_post_create`(Title varchar(255),Description varchar(255),Tags varchar(255),Image varchar(255))
BEGIN
if exists(select title from usercreatepost where usercreatepost.title=Title)
then
select 'Post name already existing' as msg , 404 as status_code;
else
insert into usercreatepost (title,description,tags,image,createdTime,updatedTime,isdeleted) values
(Title,Description,Tags,Image,now(),null,false);
select 'Post created successfully' as msg , 200 as status_code;
end if;
END