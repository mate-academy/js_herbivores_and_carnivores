'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static deleteAnimal(dead) {
    Animal.alive = Animal.alive.filter(animal => animal.name !== dead.name);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(object) {
    if (!object.hidden && object instanceof Herbivore) {
      object.health -= 50;
    }

    if (object.health === 0) {
      Animal.deleteAnimal(object);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
