'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static killAnimal(name) {
    const index = Animal.alive.indexOf(name);

    Animal.alive.splice(index, 1);
  }

  static alive = [];
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(prey) {
    if (prey.hidden === false && prey instanceof Herbivore) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      Animal.killAnimal(prey.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
