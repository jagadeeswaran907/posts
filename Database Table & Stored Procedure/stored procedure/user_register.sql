CREATE DEFINER=`root`@`localhost` PROCEDURE `user_register`(Email varchar(255), Password varchar(255))
BEGIN
if exists(select email from userregister where userregister.email = Email)
then 
 select "Email Already existing" as msg, 400 as status_code;
 else
 insert into userregister (email,password,createdTime,isdeleted) value (Email,Password,now(),false);
  select "Your Registered Successfully" as msg, 200 as status_code;
 end if;
END