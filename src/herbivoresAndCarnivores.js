'use strict';

class Animal {
  constructor(
    name,
    health = 100
  ) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(
    health,
    name
  ) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false
      && !(herbivore instanceof Carnivore)) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(creature => creature.health > 0);
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
