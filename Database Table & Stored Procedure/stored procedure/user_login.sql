CREATE DEFINER=`root`@`localhost` PROCEDURE `user_login`(Email varchar(255))
BEGIN
if exists(select null from userregister where userregister.email = Email)
then
select "Success" as msg,200 as status_code,password from userregister where userregister.email=Email;
else
select 'Invalid username or password' as msg , 404 as status_code;
end if;
END