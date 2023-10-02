'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
  };

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  static removeAnimal(animal) {
    const index = this.alive.findIndex(el => el === animal);

    this.alive.splice(index, 1);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    this.type = 'herbivore';
    Animal.addAnimal(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.type = 'carnivore';
    Animal.addAnimal(this);
  }

  bite(victim) {
    if (victim.type === 'herbivore' && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.removeAnimal(victim);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
