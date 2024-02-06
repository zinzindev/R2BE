-- Query the sum of the populations for all Japanese cities in CITY. The COUNTRYCODE for Japan is JPN.
SELECT  SUM(population)
  FROM  city
 WHERE  countrycode = 'JPN'
;

-- https://www.hackerrank.com/challenges/japan-population?isFullScreen=true