

let array = [];

let winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]


class Player {
  constructor(name, symbol, array) {
    this.name = name;
    this.symbol = symbol;
    this.array = array;

  }

  tracking(e) {

   if(counter%2){
      player2.array.push(+e)
      console.log("player2 array ", player2.array)
   }else{
    player1.array.push(+e)
    console.log("player1 array ", player1.array)
   }

for(let i = 0; i<winningArray.length; i++){
    if(winningArray[i].every(x=>this.array.includes(x))){
        console.log("wins")
        document.getElementById("table").classList.add("disable");
        document.getElementById("table").style.pointerEvents = "none";
        document.getElementById("message").innerHTML = this.name + " won!"
    }

}
 

  
 
  }
}


let player1Name;
let player2Name;


document.getElementById("playBtn").addEventListener("click", function(){

player1Name = document.getElementById("player1").value;
player2Name = document.getElementById("player2").value;

console.log(player1Name)

player1 = new Player(player1Name, "X", []);


player2 = new Player(player2Name, "O", []);


})








let mark = document.querySelectorAll(".tr");

let counter =0;

mark.forEach((mark) => {
  mark.addEventListener("click", (e)=>{
   
    if(counter%2){
        player2.tracking(e.target.id)
        e.target.innerHTML = "O"
        counter++

    }else{
        player1.tracking(e.target.id)
        e.target.innerHTML = "X"

        counter++
    }
        
  
  })


});



console.log(document.querySelector("#message").innerText = "Hello");




