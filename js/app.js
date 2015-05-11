var tttApp = angular.module('tttApp', []);

tttApp.controller('tttController', function() {
  var self = this;
  self.winner= '';                                              //Winner Declaration
  self.turns = 0;                                               //Turn Counter 
  self.squares=[
    {index:0, value:0}, 
    {index:1, value:0}, 
    {index:2, value:0}, 
    {index:3, value:0}, 
    {index:4, value:0}, 
    {index:5, value:0}, 
    {index:6, value:0},
    {index:7, value:0}, 
    {index:8, value:0}
    ];
  self.p1Lines = '';
  self.p2Lines = ''; 
  self.catLines = '';                                                 //Counters for Win Display
  self.gameOver = false;                                              //Boolean for game state
  self.cat = false;                                           

  self.declareWinner = function(x){                                 //Function to declare a winner and increment counters
    if(self.squares[x].value==1){
        self.winner = 'Player 1';
        self.p1Lines = self.p1Lines+'|';
    }else{self.winner = 'Player 2'; self.p2Lines = self.p2Lines+'|';}
        self.gameOver=true;                                         //locks game board until reset
    
  }
  self.makeMove = function(x){
  	if(self.squares[x].value == 0 && self.gameOver == false){
  		if(self.turns%2 == 0){
  	  		self.squares[x].value = 1;
  	  	}else{
  	  		self.squares[x].value = 5;
  	  	}
        if(self.turns>3){
        	for(i=0, i++)
  	  			if(self.squares[0].value==self.squares[1].value&&self.squares[1].value==self.squares[2].value && self.squares[0].value!=0){         //row 1
              self.declareWinner(0);
  	  			}else if(self.squares[3].value==self.squares[4].value&&self.squares[4].value==self.squares[5].value && self.squares[3].value!=0){   //row 2
  	  				self.declareWinner(3);
  	  			}else if(self.squares[6].value==self.squares[7].value&&self.squares[7].value==self.squares[8].value && self.squares[6].value!=0){   //row 3
  	  				self.declareWinner(6);
  	  			}else if(self.squares[0].value==self.squares[3].value&&self.squares[3].value==self.squares[6].value && self.squares[0].value!=0){   //column 1
  	  				self.declareWinner(0);
  	  			}else if(self.squares[1].value==self.squares[4].value&&self.squares[4].value==self.squares[7].value && self.squares[1].value!=0){   //column 2 
  	  				self.declareWinner(1);
  	  			}else if(self.squares[2].value==self.squares[5].value&&self.squares[5].value==self.squares[8].value && self.squares[2].value!=0){   //column 3
  	  				self.declareWinner(2);
  	  			}else if(self.squares[0].value==self.squares[4].value&&self.squares[4].value==self.squares[8].value && self.squares[0].value!=0){   //top left to bottom right
  	  				self.declareWinner(0);
  	  			}else if(self.squares[2].value==self.squares[4].value&&self.squares[4].value==self.squares[6].value && self.squares[2].value!=0){   //bottom left to top right
  	  				self.declareWinner(2);
  	  			}else if(self.turns>7){
              self.cat = true;
              self.catLines = self.catLines + '|';
            }
  	  		}
  	  	self.turns++;
  	  }
  	}
  	self.restart = function(){       //function to reset the game state to origin
  		self.turns = 0;
      self.squares = [
    {index:0, value:0}, 
    {index:1, value:0}, 
    {index:2, value:0}, 
    {index:3, value:0}, 
    {index:4, value:0}, 
    {index:5, value:0}, 
    {index:6, value:0},
    {index:7, value:0}, 
    {index:8, value:0}
    ];
      console.log(self.squares);
  	self.winner = "  ";
    self.gameOver = false;
    self.cat = false;
  	}
    self.reset = function(){
      self.restart();
      self.p1Lines = '';
      self.p2Lines = ''; 
      self.catLines = '';  
    }

});