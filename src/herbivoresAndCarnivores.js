'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
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
  bite(herbivore) {
    if (herbivore instanceof Carnivore) {
      return;
    }

    if (herbivore.hidden === true) {
      return;
    }

    herbivore.health = herbivore.health - 50;

    Animal.alive = Animal.alive.filter((animal) => {
      if (animal.health > 0) {
        return animal;
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
