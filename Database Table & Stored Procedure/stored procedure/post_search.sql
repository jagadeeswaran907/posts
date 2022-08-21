CREATE DEFINER=`root`@`localhost` PROCEDURE `post_search`(Title varchar(255),Tag varchar(255))
BEGIN
set @title = Title;
set @tag = Tag;
select * from usercreatepost where isdeleted = false and (title like CONCAT('%', @title, '%') and tag like CONCAT('%', @tag, '%')) ;
END