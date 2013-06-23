#!/usr/bin/env node
var fs = require('fs');
var buf = '2';
var primes = new Array();     // declaration
primes.push(2);

for (var i = 2; primes.length < 100; i++)
       {
           for (var j = 2; j < i; j++)
           {
               if (i % j == 0)
               {
                   var prime = 0;
                   break;
               }
               else
                   var prime = 1;
           }
           if (prime == 1)
           {
               var tmp =  ',' + i;
               buf +=tmp;
	       primes.push(i);
           }
       }
console.log(buf);
fs.writeFileSync('primes.txt', buf);
//console.log(primes.length);
