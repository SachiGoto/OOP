

function subtraction(num1,num2){
   
    // alert(num1 - num2)


}


subtraction(12,13)


function quotient(n1,n2,n3){

  console.log(n1/n2/n3)

}


quotient(1,2,3)

function multiple(x1,x2,x3){
   
    // console.log(x1 * x2 * x3)
    return (x1 * x2 * x3)

}


let result = multiple(2,3,4)

console.log(result)




function medium (number1,number2,number3){
     
     let sum = number1 + number2;
      console.log(sum % number3)
}

medium(1,2,3)


const sumAndDivide = (a,b,c) => (a+b) %c ;


function hard (n1,n2,n3,n4){
 
     let multiFirstTwo = n1 * n2;
     if(multiFirstTwo > 100){
          console.log(multiFirstTwo + n3 + n4)
     }else if(multiFirstTwo < 100){
         console.log(n4-n3)
     }else{
    //   alert( (n1 * n2 * n3) % n4)
     }
}


hard(100,1,3,2)


let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");


class Rabbit{
constructor(say){
    this.say = say;

}

speak(){
console.log("The rabbit says " , this.say)
     }


}


let bunny = new Rabbit("I'm alive")

function normalize() {
    console.log(this.coords.map(n => n / this.length));
  }

normalize.call({coords: [0, 2, 3], length: 5});


function sayHello(line){
    console.log(`${this.name} says '${line}'`);
}


let sachi = {name:"Sachi", sayHello}

let jackmo = {name:"Jackmo", sayHello}

sachi.sayHello("Jackmo is the bestimo!")

let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  // → The killer rabbit says 'SKREEEE!'

//   When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. 
  Rabbit.prototype.teeth = "small";
console.log(bunny.teeth);

// this doesn't work
// bunny.prototype.teeth = "small";
// console.log(bunny.teeth);





//   A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class.


//JavaScript classes are constructor functions with a prototype property




// Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false


function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  
  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };
  
  console.log(dog1.toString());
  // expected output: "Gabby"
  