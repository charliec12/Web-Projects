var a = []; //set variable a to an empty array
var b = []; //set variable b to an empty array

//for loop initializes variable i to 0, and will increment i by 1 until it equals 10
for(i = 0; i <= 10; i++){
  a[i]= Math.random(); //set a random number for each index in the array a
  b[i] = Math.random(); //set a random number for each index in the array b
}

print(a);
print(b);
