'use strict';

const DEFAULT_ANIMAL_HEALTH = 100;
const CARNIVORE_DAMAGE = 50;

class Animal {
  constructor(name, health = DEFAULT_ANIMAL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, isHidden = false) {
    super(name, health);
    this.hidden = isHidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= CARNIVORE_DAMAGE;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
