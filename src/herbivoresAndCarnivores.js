'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!victim.hidden && victim instanceof Herbivore) {
      Animal.alive.forEach(animal => {
        animal.health -= 50;
      });
    }

    const result = Animal.alive.filter(animal => animal.health > 0);

    Animal.alive = result;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
