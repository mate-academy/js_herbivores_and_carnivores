'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }

  takeDamage() {
    if (!this.hidden) {
      this.health -= 50;

      if (this.health <= 0) {
        Animal.alive = Animal.alive.filter((item) => item.health !== 0);
      }
    }
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      herbivore.takeDamage();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
