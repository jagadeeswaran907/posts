CREATE DEFINER=`root`@`localhost` PROCEDURE `post_delete`(PostID int)
BEGIN
update usercreatepost set isdeleted = true,updatedTime = now()  where ID = PostID;
select 'Post has been deleted successfully' as msg, 200 as status_code;
END