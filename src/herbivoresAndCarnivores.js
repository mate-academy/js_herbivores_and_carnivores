'use strict';

class Animal {
  static alive = [];
  static MIN_HEALTH = 1;

  health = 100;

  static removeFromAlive() {
    const liveAnimals = this.alive.filter(
      (item) => item.health > this.MIN_HEALTH,
    );

    this.alive.length = 0;
    this.alive.push(...liveAnimals);
  }

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health < Animal.MIN_HEALTH) {
      Animal.removeFromAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
