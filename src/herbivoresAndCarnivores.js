'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addAnimal(this);
  }

  static addAnimal(animal) {
    Animal.alive.push(animal);
  }

  static removeAnimal(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.hidden = false;
    this.type = 'herb';
  }

  hide(result) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }

  bite(animal) {
    if (animal.type === 'herb' && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.removeAnimal(animal);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
