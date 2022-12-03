
//practice questions 


//Q1
// A vector type
// Write a class Vec that represents a vector in two-dimensional space.

//It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vec prototype two methods, plus and minus, 

//that take another vector as a parameter 

//and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

// Your code here.

class Vec {

  constructor(x,y){
      this.x = x;
      this.y = y;
  }

  plus(vector){
    
    this.x = this.x + vector.x; 
    this.y = this.y + vector.y;

    return new Vec(this.x, this.y)

  }
  
  minus(vector){


 this.x = this.x - vector.x; 
    this.y = this.y - vector.y;

    return new Vec(this.x, this.y)


  }

  get length(){
          
      return  Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
      //  console.log("distance is ", distance)

  }

}

let plusVec = new Vec(1,2).plus(new Vec(2,3))

let minusVec = new Vec(1,2).minus(new Vec(2,3))

console.log("plusVec is " , plusVec)

console.log("minusVec is " , minusVec)


// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
console.log("distance " , new Vec(3, 4).length);
// // → 5




// Q2
// Groups
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.
// Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), 
//delete removes its argument from the group (if it was a member), 
//and has returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
  // Your code here.

  constructor(){
    this.group =[]; 

  }

  add(value){
   if(!this.group.includes(value)){
         this.group.push(value);
   }
   
  }

  delete(value){
    if(this.group.includes(value)){
      this.group.splice(this.group.indexOf(value), 1)
        }
      
  }

  has(value){
      return this.group.includes(value);
  }

  static from (obj){
     let newGroup = new Group()
     for(let item of obj){

      newGroup.add(item);
      console.log(newGroup)
      
     }

     return newGroup;
  }
}




let group = Group.from([20,30]);

// console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log("10 added " , group)

group.delete(10);
console.log("10 deleted " , group)

console.log(group.has(10));
// → false


//Q3
// Iterable groups
// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.





// function subtraction(num1,num2){
   
//     // alert(num1 - num2)


// }


// subtraction(12,13)


// function quotient(n1,n2,n3){

//   console.log(n1/n2/n3)

// }


// quotient(1,2,3)

// function multiple(x1,x2,x3){
   
//     // console.log(x1 * x2 * x3)
//     return (x1 * x2 * x3)

// }


// let result = multiple(2,3,4)

// console.log(result)




// function medium (number1,number2,number3){
     
//      let sum = number1 + number2;
//       console.log(sum % number3)
// }

// medium(1,2,3)


// const sumAndDivide = (a,b,c) => (a+b) %c ;


// function hard (n1,n2,n3,n4){
 
//      let multiFirstTwo = n1 * n2;
//      if(multiFirstTwo > 100){
//           console.log(multiFirstTwo + n3 + n4)
//      }else if(multiFirstTwo < 100){
//          console.log(n4-n3)
//      }else{
//     //   alert( (n1 * n2 * n3) % n4)
//      }
// }


// hard(100,1,3,2)


// let rabbit = {};
// rabbit.speak = function(line) {
//   console.log(`The rabbit says '${line}'`);
// };

// rabbit.speak("I'm alive.");


// class Rabbit{
// constructor(say){
//     this.say = say;

// }

// speak(){
// console.log("The rabbit says " , this.say)
//      }


// }


// let bunny = new Rabbit("I'm alive")

// function normalize() {
//     console.log(this.coords.map(n => n / this.length));
//   }

// normalize.call({coords: [0, 2, 3], length: 5});


// function sayHello(line){
//     console.log(`${this.name} says '${line}'`);
// }


// let sachi = {name:"Sachi", sayHello}

// let jackmo = {name:"Jackmo", sayHello}

// sachi.sayHello("Jackmo is the bestimo!")

// let protoRabbit = {
//     speak(line) {
//       console.log(`The ${this.type} rabbit says '${line}'`);
//     }
//   };
//   let killerRabbit = Object.create(protoRabbit);
//   killerRabbit.type = "killer";
//   killerRabbit.speak("SKREEEE!");
//   // → The killer rabbit says 'SKREEEE!'

// //   When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. 
//   Rabbit.prototype.teeth = "small";
// console.log(bunny.teeth);

// // this doesn't work
// // bunny.prototype.teeth = "small";
// // console.log(bunny.teeth);





// //   A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class.


// //JavaScript classes are constructor functions with a prototype property




// // Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.

// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Júlia", 62);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// // → Júlia is 62
// console.log("Is Jack's age known?", ages.has("Jack"));
// // → Is Jack's age known? false
// console.log(ages.has("toString"));
// // → false


// function Dog(name) {
//     this.name = name;
//   }
  
//   const dog1 = new Dog('Gabby');
  
//   Dog.prototype.toString = function dogToString() {
//     return `${this.name}`;
//   };
  
//   console.log(dog1.toString());
//   // expected output: "Gabby"
  