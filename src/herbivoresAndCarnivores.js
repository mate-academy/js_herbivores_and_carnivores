'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(target) {
    if (target.hasOwnProperty('hidden') && target.hidden === false) {
      target.health -= 50;

      if (target.health <= 0) {
        const deadAnimalIndex = Animal.alive.indexOf(target);

        Animal.alive.splice(deadAnimalIndex, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
