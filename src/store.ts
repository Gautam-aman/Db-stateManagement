
interface Game {
    id : string,
    player1 : string, 
    player2 : string,
    moves : string[]
}

export class GameManager{
    games : Game[]=[];
 private constructor(){
    this.games=[];
}

addMove(gameId: string, move:string){
    console.log("Adding move to game");
    const game = this.games.find(game=>game.id==gameId);
    game?.moves.push(move);
}

addGame (gameId:string){
    const game ={
        id : gameId,
    player1 : 'aman', 
    player2 : 'kishan',
    moves : []
    }
    this.games.push(game);
}

log(){
    console.log(this.games)
}

}

export const gameManager = new GameManager();