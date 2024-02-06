/*
Hermione decides the best way TO choose IS BY determining
the MINIMUM NUMBER OF gold galleons needed TO buy EACH
non-evil wand OF high POWER AND age. Write a QUERY TO
PRINT the id, age, coins_needed, AND POWER OF the wands
that Ron's interested IN, sorted IN ORDER OF descending
power. If more THAN ONE wand has same POWER, sort the
RESULT IN ORDER OF descending age.
*/
SELECT  w.id
       ,p.age
       ,w.coins_needed
       ,w.power
  FROM  wands w
       ,wands_property p
 WHERE  w.code = p.code
   AND  w.coins_needed = (
         SELECT  MIN(w2.coins_needed)
           FROM  wands w2
                ,wands_property p2
          WHERE  w2.code = p2.code
            AND  p2.is_evil = 0
            AND  w.power = w2.power
            AND  p.age = p2.age
         )
 ORDER  BY  w.power DESC
       ,p.age DESC
;

-- https://www.hackerrank.com/challenges/harry-potter-and-wands/problem?isFullScreen=true
-- ref -> https://gist.github.com/kangeugine/d7f2ababf4c9a640ee7d00ef1dfca1c5#file-ollivandersinventory-sql-L8
--     -> https://www.appsloveworld.com/mysql/100/245/hackerrank-challenge-ollivanders-inventory?expand_article=1