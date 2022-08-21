CREATE DEFINER=`root`@`localhost` PROCEDURE `user_comment_get`(PostID int)
BEGIN
select usercreatepost.title,usercomment.comment,usercomment.postID from usercreatepost left join usercomment on 
usercreatepost.ID = usercomment.postID where usercomment.postID = PostID;
END