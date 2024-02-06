-- Query the Western Longitude (LONG_W)where the smallest Northern Latitude (LAT_N) in STATION is greater than . Round your answer to  decimal places.

SELECT  ROUND(long_w ,4)
  FROM  station
 WHERE  lat_n > 38.7780
 ORDER  BY  lat_n
 LIMIT  1
;

-- https://www.hackerrank.com/challenges/weather-observation-station-17?isFullScreen=true