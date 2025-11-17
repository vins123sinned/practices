-- @param {String} $1:email
SELECT u.name 
FROM "User" u
WHERE u.email = $1