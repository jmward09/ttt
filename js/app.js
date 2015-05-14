var tttApp = angular.module('tttApp', ['firebase'])
.controller('tttController', tttController)

tttController.$inject = ['$firebaseArray'];
function tttController($firebaseArray){
  var self = this;
  self.winner= '';                                              //Winner Declaration
                                             
  self.squares = getSquares();
  self.gameState = getGameState();
  console.log(self.squares.length);
  self.squares.$loaded(
    function(){if(self.squares.length==0){
      for(i=0;i<9;i++){
        self.squares.$add({index:i, value:'empty'});
      } 
    } 
    console.log(self.squares.length);})
                                          //Counters for Win Display
  self.gameState.$loaded(function(){
    if(self.gameState.length==0){
      self.gameState.$add({turns:0});
      self.gameState.$add({p1Wins:''});
      self.gameState.$add({p2Wins:''});
      self.gameState.$add({catWins:''});
      self.gameState.$add({gameOver:false});
      self.gameState.$add({catGame:false});
      self.gameState.$add({winner:''})
    }
  });  


  function getSquares(){
    var ref = new Firebase("https://jmwtttapp.firebaseio.com/gameBoard");
    var squares = $firebaseArray(ref);
    return squares;
  }
  function getGameState(){
    var fer = new Firebase("https://jmwtttapp.firebaseio.com/gameState")
    var gameState = $firebaseArray(fer);
    return gameState;

  }

  self.declareWinner = function(x){                                 //Function to declare a winner and increment counters
    if(self.squares[x].value=='X'){
        self.gameState[6].winner = 'Player 1';
        self.gameState.$save(6)
        self.gameState[1].p1Wins += '|';
        self.gameState.$save(1);
        console.log(self.gameState[1])
    }else{
      self.gameState[6].winner = 'Player 2'; 
      self.gameState.$save(6)
      self.gameState[2].p2Wins +='|'; 
      self.gameState.$save(2);
    }
    self.gameState[4].gameOver=true;
    self.gameState.$save(4);                                         //locks game board until reset
    
  }

  self.makeMove = function(x){
    if(self.squares[x].value == 'empty' && self.gameState[4].gameOver == false){
  		if(self.gameState[0].turns % 2 == 0){
  	  		self.squares[x].value = 'X';
          self.squares.$save(x) 
  	  }else{
  	  		self.squares[x].value = 'O';
          self.squares.$save(x)
  	  }
  		for(i=0;i<7;i+=3){
        if(self.squares[i].value==self.squares[i+1].value&&self.squares[i+1].value==self.squares[i+2].value&&self.squares[i+1].value!='empty'){
          self.declareWinner(i); 
        }
      }
      for(i=0;i<3;i++){
        if(self.squares[i].value==self.squares[i+3].value&&self.squares[i+3].value==self.squares[i+6].value&&self.squares[i+3].value!='empty'){
          self.declareWinner(i);
        }
      }
  		if(self.squares[0].value==self.squares[4].value&&self.squares[4].value==self.squares[8].value&&self.squares[4].value!='empty'){   //top left to bottom right
  				self.declareWinner(0);
  		}else if(self.squares[2].value==self.squares[4].value&&self.squares[4].value==self.squares[6].value&&self.squares[4].value!='empty'){   //bottom left to top right
  				self.declareWinner(2);
  		}else if(self.gameState[0].turns>7){
          self.gameState[5].catGame = true;
          self.gameState.$save(5);
          self.gameState[3].catWins += '|';
          self.gameState.$save(3);
      }
  	  	self.gameState[0].turns++
        self.gameState.$save(0);
        console.log(self.gameState[0].turns);
  	 }
  }
	self.restart = function(){       //function to reset the game state to origin
    for(i=0;i<9;i++){
    self.squares[i].value='empty';
    self.squares.$save(i);
    }  
    self.gameState[0].turns=0;
    self.gameState.$save(0);
  	self.gameState[6].winner = "  ";
    self.gameState.$save(6);
    self.gameState[4].gameOver = false;
    self.gameState.$save(4)
    self.gameState[5].catGame = false;
    self.gameState.$save(5);
	}
  self.reset = function(){
    self.restart();
    self.gameState[1].p1Wins='';
    self.gameState.$save(1);
    self.gameState[2].p2Wins='';
    self.gameState.$save(2);
    self.gameState[3].catWins='';
    self.gameState.$save(3);  
  }

}