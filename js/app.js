var tttApp = angular.module('tttApp', []);

tttApp.controller('tttController', function() {
  var self = this;
  self.winner= 'Unkown';
  self.turns = 0;
  self.squares =[
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
  self.reset = self.squares;
  self.p1Wins = 0;
  self.p2Wins = 0;
  self.gameOver = false;
  self.declareWinner = function(x){
    if(self.squares[x].value==1){
        self.winner = 'Player 1';
        self.p1Wins++;
    }else{self.winner = 'Player 2'; self.p2Wins++;}
        self.gameOver=true;
  }
  self.makeMove = function(x){
  	if(self.squares[x].value == 0 && self.gameOver == false){
  		if(self.turns%2 == 0){
  	  		self.squares[x].value = 1;
  	  	}else{
  	  		self.squares[x].value = 5;
  	  	}
  	  	if(self.turns>7){self.winner = 'The Cat';
  	  	}else if(self.turns>3){
  	  			if(self.squares[0].value==self.squares[1].value&&self.squares[1].value==self.squares[2].value && self.squares[0].value!=0){
              self.declareWinner(0);
  	  			}else if(self.squares[3].value==self.squares[4].value&&self.squares[4].value==self.squares[5].value && self.squares[3].value!=0){
  	  				self.declareWinner(3);
  	  			}else if(self.squares[6].value==self.squares[7].value&&self.squares[7].value==self.squares[8].value && self.squares[6].value!=0){
  	  				self.declareWinner(6);
  	  			}else if(self.squares[0].value==self.squares[3].value&&self.squares[3].value==self.squares[6].value && self.squares[0].value!=0){
  	  				self.declareWinner(0);
  	  			}else if(self.squares[1].value==self.squares[4].value&&self.squares[4].value==self.squares[7].value && self.squares[1].value!=0){
  	  				self.declareWinner(1);
  	  			}else if(self.squares[2].value==self.squares[5].value&&self.squares[5].value==self.squares[8].value && self.squares[2].value!=0){
  	  				self.declareWinner(2);
  	  			}else if(self.squares[0].value==self.squares[4].value&&self.squares[4].value==self.squares[8].value && self.squares[0].value!=0){
  	  				self.declareWinner(0);
  	  			}else if(self.squares[2].value==self.squares[4].value&&self.squares[4].value==self.squares[6].value && self.squares[2].value!=0){
  	  				self.declareWinner(2);
  	  			}
  	  		}
  	  	self.turns++;
  	  }
  	}
  	self.restart = function(){
  		self.turns = 0;
      self.squares =[
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
  	self.winner = "Unkown";
    self.gameOver = false;
  	}

});