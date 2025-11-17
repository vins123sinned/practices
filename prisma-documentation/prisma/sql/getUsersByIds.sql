SELECT u.id, u.name, u.email
FROM "User" u
WHERE u.id = ANY($1)