function nice(name) {
    console.log("Hey " + name + ", you are beautiful!");
    console.log("Hey " + name + ", you are a great person and you can achieve anything you set your mind to!");
    console.log("Hey " + name + ", you are loved and appreciated!");
    console.log("Hey " + name + ", you are strong and capable of overcoming any challenge!");
}

function sum(a, b, c = 3) {
    // console.log(a + b);
    console.log(a, b, c);
    return a + b + c;
}

nice("Kumkum");
nice("Akhil");
 result1 = sum(5, 10);
 result2 = sum(20, 30);
 result3 = sum(100, 200, 50);

 console.log("The sum of these numbers is: ",  result1);
 console.log("The sum of these numbers is: ",  result2);
 console.log("The sum of these numbers is: ",  result3);

 const func1 = (x) => {
    console.log("I am an arrow function", x);
 }

 func1(45);
 func1(56);
 func1(78);