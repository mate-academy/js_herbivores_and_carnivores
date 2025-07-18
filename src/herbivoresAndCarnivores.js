'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;

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
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
      }

      return Animal.alive;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
