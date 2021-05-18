'use strict';
class Animal {
  static addAnimal(obj) {
    this.alive.push(obj);
  }

  static killAnimal(obj) {
    if (!obj.health) {
      this.alive = this.alive.filter(animal => animal.health);
    }
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.addAnimal(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    Animal.killAnimal(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
