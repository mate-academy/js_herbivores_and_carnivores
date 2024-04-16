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
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  damage = 50;
  bite(target) {
    if (target.hidden !== true && target instanceof Herbivore) {
      target.health -= this.damage;

      if (target.health <= 0) {
        const animalIndex = Animal.alive.indexOf(target);

        Animal.alive.splice(animalIndex, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
