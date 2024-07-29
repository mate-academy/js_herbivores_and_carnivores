'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static removeAnimal(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
  }

  static getAliveAnimals() {
    return Animal.alive.map(animal => animal.toObject());
  }

  toObject() {
    return { name: this.name, health: this.health };
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = true;
  }

  toObject() {
    return { ...super.toObject(), hidden: this.hidden };
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
  }

  bite() {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -=50;

      if (target.health <= 0) {
        target.health = 0;
        Animal.removeAnimal(target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
