'use strict';

class Animal {
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.health > 0 && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const position = Animal.alive.indexOf(animal);

      Animal.alive.splice(position, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
