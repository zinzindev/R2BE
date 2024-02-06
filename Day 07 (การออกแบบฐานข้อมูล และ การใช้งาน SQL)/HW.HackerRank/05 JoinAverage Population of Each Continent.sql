SELECT  country.continent
       ,FLOOR(AVG(city.population))
  FROM  city
       ,country
 WHERE  city.countrycode = country.code
 GROUP  BY  country.continent
;


       -- https://www.hackerrank.com/challenges/average-population-of-each-continent/problem?isFullScreen=true

       -- ref -> https://github.com/viveksyngh/Hackerrank-Code/blob/master/SQL/Join/Average%20Population%20of%20Each%20Continents.sql