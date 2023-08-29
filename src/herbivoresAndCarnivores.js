'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static deleteAnimal() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health === 0) {
        Animal.deleteAnimal();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
