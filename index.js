//

// Dogs Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other one yip "Woof! Woof"




class Doggie{
   
    constructor(name, species, size){
        this.name = name,
        this.species = species,
        this.size = size
        
    }

    bark(){
           if(this.size > 60){
               return "Grrr Grrr"
           }else{
            return "Woof Woof!"
           }
        }
    


}

const fang = new Doggie("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Doggie("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);





// Tic Tac Toe

let counter = 0;
let winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

let tr = document.querySelector(".tr"); 
document.addEventListener('click', function(e){
  if(counter%2) {
    player2.tracking(e.target.id);
    e.target.innerHTML = "X";
  }else{
    player1.tracking(e.target.id);
    console.log(player2.array);
    e.target.innerHTML = "O";
  }



  counter++
  if(counter === 9){
    document.getElementById("message").innerHTML = "Game Over"
  }
   
})




class Player{

    constructor(name, symbol,array){
        this.name = name;
        this.symbol = symbol;
        this.array = array;

    }
   
    tracking(x){
  
        if( this.symbol === "x") this.array.push(x)
        else this.array.push(+x)

        console.log("player 1 array ", player1.array)
        console.log("player 2 array ", player2.array )

        for(let i=0; i<winningArray.length; i++){

            if(winningArray[i].every(x=> this.array.includes(x))){
                     
               console.log("win" , winningArray[i], this.array);
               document.getElementById("message").innerHTML = this.name +  "Wins!"

            }
            // console.log("hello " ,winningArray[i])
            // console.log("this array", this.array)
            // if(this.array.every(x=>{return winningArray[i].indexOf(x) !== -1;})){
            //       console.log("wins")
            // } else{
            //     console.log("continues")
            // }
          }
    }

    mark(){

        e.target.innerHTML = this.symbol;

    }

}



const player1 = new Player("sachimo", "X", []);

const player2 = new Player("jackmo", "O", []);



const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

// for object with methods, it's better to use factries(constructor)

// factory Function - object inside of a function and return
function createCircle(radius) {
  // if key and value are the same, you can remove the value
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);


// Constructor Function - use "this" and "new"
// THIS FUNCTION CIRCLE IS AN OBJECT!!!
function Circle(radius){
    // this key word to set a property of an object
    // this is referencing to the object that is excecuting this code. 
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

    // no explicit return required
}

// pass arguments after an object{}
Circle.call({}, 1);

// pass arguments in an array (if you have an array declared)
Circle.apply({}, [])


const another = new Circle(1);
// New operator creates an empty object. it will set "this" to point that object. 
// by using "new" keyword, this object will create an empty object
// creating an instance of class



// const Circle2 = new Function('radius', `
   
// this.radius = radius;
// this.draw = function(){
//     console.log('draw');
// }
   
// `);

// const constCircle = new Circle2(1)



// primitives, values are independent even thought the value was copeid from somewhere. 
// Primitives are copied by their value
let a = 10;
let b = a;

a = 20;

console.log(a)
console.log(b)

// objects are not the same
// value of x is stored somewhere. It's not independent. 
// Objects are copied by their reference
let x = {value:10};
let y = x;

x.value = 20; 




let obj = {value:10}
// let number = 10;

function increase(obj){
    obj.value++;
    // number++;
    // this number is exsist in the function
  
}

// increase(number);
increase(obj);
console.log("number " , obj.value)


function CircleA(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circlea = new CircleA(10)

// both are the same 
// bracket notion and dotnotation
// bracket notion - useful for dynamically accessing property name

const propertyName = 'price';


circlea.location = {x:1};
circle['location'] = {x:1}
circle['price'] = {x:1}


// delete property 

delete circle.location;



// Iterate through object 
// use for in 

function Coffee(price){
    this.price = price
    this.flavor = function(){
        console.log("cheeky")
    }
}

let coffee1 = new Coffee(12.99)

for(let key in coffee1 ){
    console.log(key)
}

// what if I only want property 

for (let key in coffee1){
    if(typeof coffee1[key] !== 'function')
        console.log("key is " ,key, coffee1[key])
}


//Object.keys ->  all the keys in the coffee object will be stored in an array
const keys = Object.keys(coffee1);

console.log(keys)

// finding to see if object has a given property
if('price' in coffee1){
    console.log('coffee has price')
}


// abstraction 
// in this object, defaultlocatioon and coputeOptimumLocation shouldn't be accessile for everyone 

function Square(radius){
    this.radius = radius;
    this.defaultLocation = {x:0 , y:0};
    this.computeOptimumLocation = function(){
    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    };
}

const square = new Square(10);


// how to made certain properties not accessible from outside of the object? use let to set properties in local scope

function Square2(radius){
    this.radius = radius;
    let defaultLocation = {x:0 , y:0};
    
    // Read only property 
    Object.defineProperty(this, 'dedaultLocation', {
        get: function(){
        return defaultLocation;

    },
    set: function(value){
        
        if(!value.x || !value.y)
            throw new Error('Invalid location.');
       
        defaultLocation = value;
       
        // console.log("value x is " ,value)
       
    }
    });

    let computeOptimumLocation = function(){
    }
    this.draw = function(){
        computeOptimumLocation();

        // this.defaultLocation
    };
}

// you can't access to defaultLocation and computeOptimumLocation 
const square2 = new Square2(10);
// console.log(square2.computeOptimumLocation)
square2.defaultLocation = 1;
console.log(square2)



// ----------------------------- /------------------------------------ 

// leon's class #31

// class Animal{
//     constructor(name){
//         this.name = name

//     }
//     speak(){
//         console.log(`${this.name} make a sound`)
//     }
// }

// with getter and setter - so people can't change the properties!!!

class Animal{
    constructor(name){
        this._name = name

    }

    get name(){
        return this._name
    }
    speak(){
        console.log(`${this.name} make a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        // super refers to the parent object
        super(name)
        this.breed = breed
    }
}

class Cat extends Animal{
    constructor(name, breed){
        super(name)
    this.breed = breed


    }
  // override parent object speak method
    speak(){
        console.log('meow')
    }
    
}

let simba = new Dog('Simba', 'Spheperd')
console.log(simba)
console.log(simba.speak())

let american = new Cat('meow', 'American short hair')
console.log(american)

simba._name = "sachi";
console.log(simba._name)




// class Animal