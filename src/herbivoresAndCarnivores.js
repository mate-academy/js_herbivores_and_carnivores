'use strict';
class Animal {
  static alive = [];
  static DEFAULT_HEALTH = 100;

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    this.alive = this.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  static DAMAGE_FROM_BITE = 50;

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  receiveBite() {
    if (!this.hidden) {
      this.health -= Herbivore.DAMAGE_FROM_BITE;
      Animal.removeDeadAnimals();
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore) {
      animal.receiveBite();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
