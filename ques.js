// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.

// var arr = [5, 10, 15, 20];
// var [first,,third ] = arr
// console.log(first,third);

// 2. Swap the values of a and b using array destructuring.
// var a =10,b=20;
// var [a,b]=[b,a]
// console.log(a,b);

// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.
// var obj = { name: "John", age: 25, city: "New York" };
// var {name,city} =obj
// console.log(name,city);


// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.
// var obj= {id:101};
// var {user='Guest'}=obj
// console.log(user);




// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.
// var obj= {person: {first: "Alice", last: "Johnson"}}
// var {person:{first,last}}=obj
// console.log(first,last);


// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.
// var arr= [100, 200, 300];
// var [first,,...rest]=arr
// console.log(rest);


// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.
// function summ([a,b,c,d]){
//     return a+b+c+d;

// }
// console.log(summ([1, 2, 3, 4]));


// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.
// var obj ={name: "David", age: 30, job: "Developer"}
// var{job:profession}=obj
// console.log(profession);


// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.
// var arr = [[1, 2], [3, 4]];
// var [[one],[,four]]=arr;
// console.log(one,four);

// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.

// var values = [10, 20]
// if(values[0]<values[1]){
//     [values[0], values[1]] = [values[1], values[0]];
// }
// console.log(values);

// 11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.
// var obj = {user: {id: 5, info: {name: "Sam", city: "Paris"}}}
// var{user:{info:{name,city}}}=obj
// console.log(name,city);


// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.
// var arr = [10, [20, 30], 40];
// var [first,[,second],third]=arr
// console.log(first,second,third);


// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.
// const arr = [[1, "one"], [2, "two"], [3, "three"]]
// for (let [key, value] of arr) {
//     console.log(key,value);
    
// }
// for(let i=0;i<arr.length;i++){
//     const [key, value] =arr[i]
//     console.log(`Key:${key},Value:${value}`);
    
// }



// 14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.
// function sumAC ({a,c}){
//     return a+c
// }
// console.log(sumAC({a: 5, b: 10, c: 15}));

// 15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.

// var obj = {data: {user: {id: 3, details: {age: 25, country: "India"}}}}

// var {data:{user:{id,details:{country}}}} =obj
// console.log(id,country);


// 16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.

// const obj ={a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}
// const {a:[,,{b}],c:{e:[,six]}}=obj
// console.log(b,six);



// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.
// var obj = {items: [{price: 100}, {price: 200}], discount: 0.1}
// var {items:[{price:p1},{price:p2}],discount} = obj
// var total = (p1+p2)*(1-discount);
// console.log(total);



// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.
// function average ({name,scores:[s1,s2,s3]}){
// return (s1+s2+s3)/3;
// }

// console.log(average({ name: "Alice", scores: [80, 90, 100] }));


// 19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.
// const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}] 
// users.map(({id,name})=>console.log(id,name))

// 20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.
// var arr = [["x", 1], ["y", 2], ["z", 3]]

// arr.forEach(([key, value ])=>console.log(`Key:${key},Value:${value}`));

