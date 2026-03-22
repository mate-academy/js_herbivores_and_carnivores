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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  bite(herbivore) {
    if (!(herbivore instanceof Herbivore)) {
      return;
    }

    if (herbivore.hidden) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);

    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
