'use strict';

let idCnt = 0;

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    this.id = idCnt++;
    Animal.alive.push(this);
  }

  static removeById(id) {
    Animal.alive = Animal.alive.filter((animal) => animal.id !== id);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeById(animal.id);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
