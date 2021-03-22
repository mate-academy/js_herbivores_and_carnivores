'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    }
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(name) {
    if (name instanceof Herbivore && !name.hidden) {
      name.health -= 50;
    }

    if (name.health <= 0) {
      const indexOfAnimal = Animal.alive.indexOf(name);

      Animal.alive.splice(indexOfAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
