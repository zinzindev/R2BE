-- Query the greatest value of the Northern Latitudes (LAT_N) from STATION that is less than . Truncate your answer to  decimal places.

-- QUERY 1
SELECT  ROUND(MAX(LAT_N) ,4)
  FROM  STATION
 WHERE  LAT_N < 137.2345
;

-- https://www.hackerrank.com/challenges/weather-observation-station-14?isFullScreen=true