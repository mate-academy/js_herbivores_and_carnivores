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

class Carnivore extends Animal {
  static DAMAGE_AMOUNT = 50;

  bite(aim) {
    if (aim instanceof Herbivore && !aim.hidden) {
      aim.health -= Carnivore.DAMAGE_AMOUNT;

      if (!aim.health) {
        Animal.alive.splice(Animal.alive.indexOf(aim), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
