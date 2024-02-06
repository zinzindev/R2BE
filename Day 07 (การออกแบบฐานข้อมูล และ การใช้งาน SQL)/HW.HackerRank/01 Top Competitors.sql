-- Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. Order your output in descending order by the total number of challenges in which the hacker earned a full score. If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.
  WITH  max_score AS (
         SELECT  MAX(score) mscore
                ,challenge_id
                ,hacker_id
           FROM  submissions
          GROUP  BY  hacker_id
                ,challenge_id
         )
SELECT  h.hacker_id
       ,h.name
       ,SUM(ms.mscore)
  FROM  hackers h
       ,max_score ms
 WHERE  ms.hacker_id = h.hacker_id
 GROUP  BY  h.hacker_id
       ,h.name
HAVING  SUM(ms.mscore) > 0
 ORDER  BY  SUM(ms.mscore) DESC
       ,hacker_id
;


       -- https://www.hackerrank.com/challenges/full-score/problem?isFullScreen=true

       -- ref-> https://codeityweb.blogspot.com/2021/01/top-competitors-hackerrank-solutions.html

       --    -> https://dev.to/ranggakd/top-competitors-solution-hackerrank-mssql-3oo5#the-input