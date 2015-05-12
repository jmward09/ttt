var tttApp = angular.module('tttApp', []);

tttApp.controller('tttController', function() {
  var self = this;
  self.winner= '';                                              //Winner Declaration
  self.turns = 0;                                               //Turn Counter 
  self.squares=[];
  for(i=0;i<9;i++){
    self.squares.push({index:i, value:'empty'});
  } 
  self.p1Lines = '';
  self.p2Lines = ''; 
  self.catLines = '';                                                 //Counters for Win Display
  self.gameOver = false;                                              //Boolean for game state
  self.cat = false; 


  self.declareWinner = function(x){                                 //Function to declare a winner and increment counters
    if(self.squares[x].value=='X'){
        self.winner = 'Player 1';
        self.p1Lines = self.p1Lines+'|';
    }else{self.winner = 'Player 2'; self.p2Lines = self.p2Lines+'|';}
        self.gameOver=true;                                         //locks game board until reset
    
  }
  self.makeMove = function(x){
  	if(self.squares[x].value == 'empty' && self.gameOver == false){
  		if(self.turns%2 == 0){
  	  		self.squares[x].value = 'X';
  	  	}else{
  	  		self.squares[x].value = 'O';
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
  	  			}else if(self.turns>7){
              self.cat = true;
              self.catLines = self.catLines + '|';
            }
  	  	self.turns++;
  	  }
  	}
	self.restart = function(){       //function to reset the game state to origin
    for(i=0;i<9;i++){
    self.squares[i]={index:i, value:'empty'};
    } 
    console.log(self.squares);
	self.winner = "  ";
  self.gameOver = false;
  self.cat = false;
  self.turns=0;
	}
  self.reset = function(){
    self.restart();
    self.p1Lines = '';
    self.p2Lines = ''; 
    self.catLines = '';  
  }

});