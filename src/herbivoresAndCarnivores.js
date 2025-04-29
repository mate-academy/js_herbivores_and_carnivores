'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }

  checkDeath() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);
      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
  }

  bite(herbivore) {
    if (!(herbivore instanceof Herbivore) || herbivore.hidden) return;
    herbivore.health -= 50;
    herbivore.checkDeath();
  }
}

module.exports = { Animal, Herbivore, Carnivore };
