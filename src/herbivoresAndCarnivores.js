'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeDeadAnimal(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
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
  bite(herbivore) {
    if (herbivore.hidden !== true && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.removeDeadAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
