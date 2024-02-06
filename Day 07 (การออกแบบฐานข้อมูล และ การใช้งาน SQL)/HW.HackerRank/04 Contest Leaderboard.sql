WITH  max_score AS (
         SELECT  MAX(score) mscore
                ,challenge_id
                ,hacker_id
           FROM  submissions
          GROUP  BY  hacker_id
                ,challenge_id
         )

select h.hacker_id
       , h.name
       , sum(ms.mscore)
from Hackers h
     , max_score ms
where ms.hacker_id = h.hacker_id

-- https://www.hackerrank.com/challenges/contest-leaderboard/problem
-- ref -> https://youtu.be/E9mXzQ0kU4o?si=C3IkMtX4WFCbgxWV