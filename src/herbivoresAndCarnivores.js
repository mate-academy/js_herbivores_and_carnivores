'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }

  compare(first, second) {
    return typeof first;
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = hidden || false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(herbivr) {
    if ((herbivr instanceof Herbivore) && !herbivr.hidden) {
      herbivr.health -= 50;
    }

    if (herbivr.health <= 0) {
      const herbivrIndx = Animal.alive.findIndex(animal => {
        return Object.is(animal, herbivr);
      });

      Animal.alive.splice(herbivrIndx, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
