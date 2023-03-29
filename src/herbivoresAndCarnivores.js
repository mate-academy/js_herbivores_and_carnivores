'use strict';

class Animal {
  constructor(health, name) {
    this.health = health;
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name);
    this.hidden = hidden;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victum) {
    if (!victum.hidden && victum instanceof Herbivore) {
      victum.health -= 50;
    }

    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
