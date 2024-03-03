'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDeadAnimal(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
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
    if (
      target instanceof Carnivore ||
      (target.hidden && target instanceof Herbivore)
    ) {
      return 'The bite failed.';
    } else {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeDeadAnimal(target);

        return `${target.name} has been killed.`;
      } else {
        return `${target.name} has been bitten.`;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
