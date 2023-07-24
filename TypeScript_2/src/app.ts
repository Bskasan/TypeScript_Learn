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
