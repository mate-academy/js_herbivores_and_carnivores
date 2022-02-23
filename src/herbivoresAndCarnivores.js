'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden === false) {
      prey.health -= 50;
      prey.health === 0 && Animal.alive.splice(Animal.alive.indexOf(prey), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
