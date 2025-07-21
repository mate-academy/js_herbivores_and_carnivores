'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  static alive = [];
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(herbivore) {
    if (
      herbivore instanceof Herbivore &&
      herbivore.health > 0 &&
      !herbivore.hidden
    ) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
