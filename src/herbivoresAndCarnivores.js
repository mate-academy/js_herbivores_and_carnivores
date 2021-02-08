'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  };

  addAnimal(animal) {
    Animal.alive.push(animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    this.addAnimal(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.addAnimal(this);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.name !== target.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
