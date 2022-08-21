CREATE DEFINER=`root`@`localhost` PROCEDURE `user_comment`(Comment varchar(255),PostID int)
BEGIN
insert into usercomment (comment,postID,createdTime) values (Comment,PostID,now());
select "comment added successfully" as msg, 200 as status_code;
END