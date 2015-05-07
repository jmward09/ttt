var tttApp = angular.module('tttApp', []);

tttApp.controller('tttController', function () {
  var self = this;
  self.winner= 'Unkown';
  self.turns = 0;
  self.squares =[0, 0, 0, 0, 0, 0, 0, 0, 0];
  //self.checkWinner=checkWinner;
  self.makeMove = function(x){
  	if(self.squares[x] == 0){
  		if(self.turns%2 == 0){
  	  		self.squares[x] = 1;
  	  	}else{
  	  		self.squares[x] = 5;
  	  	}
  	  	if(self.turns>8){self.winner = 'The Cat';
  	  	}else if(self.turns>3){
  	  			if(self.squares[0]==self.squares[1]&&self.squares[1]==self.squares[2] && self.squares[0]!=0){
  	  				if(self.squares[0]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}else if(self.squares[3]==self.squares[4]&&self.squares[4]==self.squares[5] && self.squares[3]!=0){
  	  				if(self.squares[3]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}else if(self.squares[6]==self.squares[7]&&self.squares[7]==self.squares[8] && self.squares[6]!=0){
  	  				if(self.squares[6]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}else if(self.squares[0]==self.squares[3]&&self.squares[3]==self.squares[6] && self.squares[0]!=0){
  	  				if(self.squares[0]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}else if(self.squares[1]==self.squares[4]&&self.squares[4]==self.squares[7] && self.squares[1]!=0){
  	  				if(self.squares[1]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}else if(self.squares[2]==self.squares[5]&&self.squares[5]==self.squares[8] && self.squares[2]!=0){
  	  				if(self.squares[2]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}else if(self.squares[0]==self.squares[4]&&self.squares[4]==self.squares[8] && self.squares[0]!=0){
  	  				if(self.squares[0]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}else if(self.squares[2]==self.squares[4]&&self.squares[4]==self.squares[6] && self.squares[2]!=0){
  	  				if(self.squares[2]==1){
  	  					self.winner = 'Player 1';
  	  				}else{self.winner = 'Player 2';}
  	  			}
  	  		}
  	  	self.turns++;
  	  }
  	self.restart = function(){
  		self.turns = 0;
  		self.squares =[0, 0, 0, 0, 0, 0, 0, 0, 0];
  		self.winner = "Unkown";
  	}
});