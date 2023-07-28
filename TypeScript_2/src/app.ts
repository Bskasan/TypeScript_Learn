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

// Abstract Classes

abstract class Vehicle {
  year: number;
  color: string;

  constructor(year: number, color: string) {
    this.year = year;
    this.color = color;
  }

  startEngine(): void {
    console.log("Engine Started");
  }

  abstract stopEngine(): void;
}

class Car extends Vehicle {
  model: string;
  numOfDoors: number;

  constructor(year: number, color: string, model: string, numOfDoors: number) {
    super(year, color);
    this.model = model;
    this.numOfDoors = numOfDoors;
  }

  stopEngine(): void {
    console.log("Car stopped!");
  }
}

const car = new Car(1983, "red", "mercedes", 4);
car.startEngine();
car.stopEngine();

// ! ------------------------------------------------ //
class Person {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    console.log(this.age);
  }

  setAge(newAge: number) {
    if (newAge > 0 && newAge <= 100) {
      this.age = newAge;
    } else {
      throw new Error("Invalid Age");
    }
  }
}

const Barry = new Person("Barry", 25);

Barry.getAge();
Barry.setAge(26);
Barry.getAge();
