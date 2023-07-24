console.log("Hello");

// ! ------------- CLASSES ------------------- ! //

class Player {
  playerNickName: string;
  playerLevel: number;
  playerRole: string;

  constructor(nickname: string, level: number, role: string) {
    this.playerNickName = nickname;
    this.playerLevel = level;
    this.playerRole = role;
  }
}

let player1 = new Player("Ronin", 120, "Rogue");
let player2 = new Player("Berceste", 79, "Warrior");
