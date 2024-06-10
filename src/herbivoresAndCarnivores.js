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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

const DAMAGE_AMOUNT = 50;

class Carnivore extends Animal {
  bite(aim) {
    if (aim instanceof Herbivore && !aim.hidden) {
      aim.health -= DAMAGE_AMOUNT;

      if (!aim.health) {
        Animal.alive = Animal.alive.filter(animal => animal !== aim);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
