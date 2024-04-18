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
  constructor(name, health) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden !== true && target instanceof Herbivore) {
      target.health -= 50;

      if (target.health <= 0) {
        const animalIndex = Animal.alive.indexOf(target);

        if (animalIndex !== -1) {
          Animal.alive.splice(animalIndex, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
