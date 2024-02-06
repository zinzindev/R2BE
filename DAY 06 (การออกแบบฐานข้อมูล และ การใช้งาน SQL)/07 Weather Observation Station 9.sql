-- Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.
SELECT  DISTINCT city
  FROM  station
 WHERE  NOT (
         city LIKE 'A%'
             OR  city LIKE 'E%'
             OR  city LIKE 'I%'
             OR  city LIKE 'O%'
             OR  city LIKE 'U%'
         )
;

-- https://www.hackerrank.com/challenges/weather-observation-station-9?isFullScreen=true