CREATE DEFINER=`root`@`localhost` PROCEDURE `user_like_post`(PostLike int,PostShare int,UserID int)
BEGIN
insert into userlikepost (postLike,postShare,userID,createdTime) values (PostLike,PostShare,UserID,now());
select "Like and Share have been given" as msg , 200 as status_code;
END