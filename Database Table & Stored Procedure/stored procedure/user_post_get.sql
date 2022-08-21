CREATE DEFINER=`root`@`localhost` PROCEDURE `user_post_get`(PostID int)
BEGIN
if(PostID = 0)
then
select * from usercreatepost where isdeleted=false;
else
select * from usercreatepost where createdBY = PostID and isdeleted=false;
end if;
END