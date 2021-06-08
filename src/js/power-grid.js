let turnOrder = [];
let turnNumber = 0;
let playerInputs = ["Joel", "Landon", "Derek", "Lukas"];
let players;
let colors = ['red','green','yellow','blue','purple','black'];

// Player Object Constructor
function Player(name, color) {
  this.name = name;
  this.money = 50; // starting money is $50
  this.totalMoney = 50; // total money over time (starts at $50)
  this.citiesOnMap = {};
  this.turnOrderPosition = 0;
  this.powerPlantsOwned = {};
  if(this.name === "Derek"){
    this.color = "Red";
  }
  this.color = color;
}

// take the players array and use their names to create players using the Player constructor
function buildPlayers(players) {
  let builtPlayers = [];
  players.forEach((player, index) => {
    let currentPlayer = new Player(players[index]);
    builtPlayers.push(currentPlayer);
  })

  return builtPlayers;
}

function determineTurnOrder() {
  if(turnNumber < 0){
    // updating turn order after the first turn
  } else {
    
    //setting turn order at the beginning of the game
    for(let i = 0; i < players.length; i ++){
      let randomSelection = getRandomInt(0, players.length);
      console.log(randomSelection);
      if(i === 0 || turnOrder[i - 1] === randomSelection) {
        randomSelection = getRandomInt(0, players.length);
      } else {
          turnOrder[i] = randomSelection;
      }
    }
  }
}



players = buildPlayers(playerInputs);

// Utilities
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

