console.log("This is strings tutorial");
let a = "Kumkum";
console.log(a[0]); // Output: K
console.log(a[1]); // Output: u
console.log(a[2]); // Output: m
console.log(a[3]); // Output: k
console.log(a[4]); // Output: u
console.log(a[5]); // Output: m

console.log(a.length); // Output: 6
let real_name = "Kumkum";
let friend = "Lipika";
console.log("Her name is " + real_name + " and her friend's name is " + friend); // Output: Her name is Kumkum and her friend's name is Lipika
console.log(`Her name is ${real_name} and her friend's name is ${friend}`); // Output: Her name is Kumkum and her friend's name is Lipika

let b = "Lipika";
console.log(b.toUpperCase()); // Output: LIPIKA
console.log(b.toLowerCase()); // Output: lipika
console.log(b.length); // Output: 6
console.log(b.slice(1, 4)); // Output: ipi
console.log(b.slice(1, 5)); // Output: ipik
console.log(b.slice(1)); // Output: ipika
console.log(b.replace("Li", "77")); // Output: 77pika
console.log(b.concat(a, "Aishwarya", "Rahul", "Priya")); // Output: LipikaKumkumAishwarya
console.log(b); // Output: Lipika