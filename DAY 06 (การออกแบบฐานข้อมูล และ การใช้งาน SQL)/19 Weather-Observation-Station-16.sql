-- Query the smallest Northern Latitude (LAT_N) from STATION that is greater than . Round your answer to  decimal places.

SELECT  MIN(ROUND(lat_n ,4))
  FROM  station
 WHERE  lat_n > 38.7780
;

-- https://www.hackerrank.com/challenges/weather-observation-station-16?isFullScreen=true