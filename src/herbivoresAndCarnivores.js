'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
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
  bite(anotherAnimal) {
    if (anotherAnimal instanceof Herbivore && !anotherAnimal.hidden) {
      anotherAnimal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((x) => x.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
