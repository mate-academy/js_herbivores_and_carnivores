'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    const biteDamage = 50;

    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health = prey.health - biteDamage;
    }

    if (prey.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
