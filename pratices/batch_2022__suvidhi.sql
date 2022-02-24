
-- FOR USERS

-- INSERT
-- if you want to insert data into database
INSERT INTO `users`(`id`, `first_name`, `last_name`, `age`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES ('[value-1]','suvidhi','bhatnagar','35','Female','[value-6]','[value-7]','[value-8]');



-- UPDATE
-- update users current time for particular id
UPDATE `users` SET `created_at` = CURRENT_TIME() WHERE `users`.`id` = 151

-- updating id when it changes from 152 to 204 
UPDATE `users` SET `id`='152' WHERE `users`.`id` = 204;

-- updating current time from starting id 1 to 150
UPDATE `users` SET `created_at` = CURRENT_TIME() WHERE `users`.`id` BETWEEN 1 AND 150;



-- DELETE
 -- if you want to delete users id 

DELETE FROM `users` WHERE `users`.`id` = 200
 DELETE FROM `users` WHERE `users`.`id` BETWEEN 195 AND 198;


 -- SELECT
 -- IT WILL SHOW MINIMUM AGE from the users
SELECT MIN(age) as min_age FROM `users`;
 -- IT WILL SHOW Maximum AGE from the users
SELECT MAX(age) as max_age FROM `users`;


-- FOR POSTS
 
 -- Update queries 
UPDATE `users` SET `created_at` = CURRENT_TIME() WHERE `users`.`id` BETWEEN 1 AND 150;

--maximum value or views value
SELECT MAX(views) as max_views FROM `posts` WHERE (views)>40;


--INNER JOINS



