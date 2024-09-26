'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;

    return `${this.name} is now hidden.`;
  }

  reveal() {
    this.hidden = false;

    return `${this.name} is now revealed.`;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      Animal.removeDeadAnimals();

      return `Bite successful! ${target.name}'s health is now ${target.health}.`;
    } else {
      return 'Unable to bite the target.';
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
