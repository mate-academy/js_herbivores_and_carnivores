'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}
class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeDeadAnimals();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
