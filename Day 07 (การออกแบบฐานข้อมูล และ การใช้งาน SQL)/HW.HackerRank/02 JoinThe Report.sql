-- You are given two tables: Students and Grades. Students contains three columns ID, Name and Marks.

SELECT  IF(g.grade < 8 ,NULL ,s.name)
       ,g.grade
       ,s.marks
  FROM  students s
       ,grades g
 WHERE  s.marks BETWEEN g.min_mark
   AND  g.max_mark
 ORDER  BY  g.grade DESC
       ,s.name
;

-- https://www.hackerrank.com/challenges/the-report/problem?isFullScreen=true
-- ref -> https://github.com/BlakeBrown/HackerRank-Solutions/blob/master/SQL/4_Basic%20Join/04_The%20Report/The%20Report.mysql
--     -> https://github.com/yaru22/problem-solving/blob/master/hackerrank/the-report.sql