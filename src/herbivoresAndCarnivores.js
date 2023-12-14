'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

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
  constructor(name) {
    super(100, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.removeDeadAnimal(this);
    }
  }

  removeDeadAnimal(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
    this.hidden = false;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
