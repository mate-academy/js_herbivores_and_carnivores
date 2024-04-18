'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
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

    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;

      if (target.health <= 0) {
        const deadAnimalIndex = Animal.alive.indexOf(target);

        if (deadAnimalIndex !== -1) {
          Animal.alive.splice(deadAnimalIndex, 1);
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
