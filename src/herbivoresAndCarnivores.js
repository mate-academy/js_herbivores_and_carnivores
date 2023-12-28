'use strict';

class Animal {
  static alive = [];
  static addAnimal(animal) {
    this.alive.push(animal);
  }
  static killAnimal(herbivore) {
    Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAnimal(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.killAnimal(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
