'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }

  injure(healthPoints) {
    this.health -= healthPoints;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

Animal.alive = [];

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
  bite(mammal) {
    if (
      mammal instanceof Herbivore
      && !mammal.hidden
    ) {
      mammal.injure(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
