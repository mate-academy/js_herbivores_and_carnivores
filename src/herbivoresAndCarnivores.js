'use strict';

class Animal {
  static alive = [];
  constructor(name, health) {
    this.health = health || 100;
    this.name = name;
  }

  add(animal) {
    Animal.alive.push(animal);
  }

  checkAlive(animal) {
    if (animal.health <= 0) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    super.add(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    super.add(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      super.checkAlive(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
