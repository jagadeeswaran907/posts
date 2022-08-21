CREATE DEFINER=`root`@`localhost` PROCEDURE `post_like_share_get`(LikeID int)
BEGIN
select usercreatepost.title,userlikepost.postLike,userlikepost.postShare,userlikepost.userID from usercreatepost left join userlikepost
on usercreatepost.ID = userlikepost.userID where userlikepost.userID = LikeID;
END