'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

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
  bite(name) {
    if (name instanceof Herbivore) {
      const find = Animal.alive.find(animal => animal === name);
      const findIndex = Animal.alive.findIndex(animal => animal === name);

      if (find.hidden === false) {
        find.health -= 50;
      }

      if (name.health <= 0) {
        Animal.alive.splice(findIndex, 1);
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
