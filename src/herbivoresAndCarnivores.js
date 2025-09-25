'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.checkAlive();

    Animal.alive.push(this);
  }

  checkAlive() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // constructor(name) {
  //   super(name);
  // }

  bite(herbAnimal) {
    if (herbAnimal instanceof Herbivore && herbAnimal.hidden === false) {
      herbAnimal.health -= 50;
      herbAnimal.checkAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
