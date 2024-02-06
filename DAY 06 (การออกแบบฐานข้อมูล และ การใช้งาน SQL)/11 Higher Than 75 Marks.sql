-- Query the Name of any student IN STUDENTS who scored higher than Marks. Order your output by the last three characters of each name. If two OR more students both have names ending IN the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
SELECT  name
  FROM  students
 WHERE  marks > 75
 ORDER  BY  RIGHT (name ,3)
       ,id
;

-- https://www.hackerrank.com/challenges/more-than-75-marks?isFullScreen=true