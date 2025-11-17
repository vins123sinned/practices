SELECT u.id, u.name, count(p.id) as "postCount"
FROM "User" u
LEFT JOIN "Post" p on u.id = p."authorId"
GROUP BY u.id, u.name