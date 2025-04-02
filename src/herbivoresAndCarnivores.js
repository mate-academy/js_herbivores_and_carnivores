'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((elem) => elem !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    return (this.hidden = true);
  }
}

class Carnivore extends Animal {
  bite(wild) {
    if (!(wild instanceof Herbivore) || wild.hidden) {
      return;
    }

    wild.health -= 50;

    if (wild.health <= 0) {
      wild.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// class Animal {
//   // write your code here
//   static alive = [];

//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     Animal.alive.push(this);
//   }

//   die() {
//     Animal.alive = Animal.alive.filter((animal) => animal !== this);
//   }
// }

// class Herbivore extends Animal {
//   // write your code here
//   constructor(name) {
//     super(name);
//     this.hidden = false;
//   }

//   hide() {
//     this.hidden = true;
//   }
// }

// class Carnivore extends Animal {
//   // write your code here
//   bite(target) {
//     if (!(target instanceof Herbivore) || target.hidden) {
//       return;
//     }

//     target.health -= 50;

//     if (target.health <= 0) {
//       target.die();
//     }
//   }
// }
