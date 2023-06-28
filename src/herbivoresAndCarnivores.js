'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static deleteAnimal(animal) {
    const delIndex = this.alive.indexOf(animal);

    this.alive.splice(delIndex, 1);
  }
}

Animal.alive = [];

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
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;
    }

    if (victim.health === 0) {
      Animal.deleteAnimal(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
