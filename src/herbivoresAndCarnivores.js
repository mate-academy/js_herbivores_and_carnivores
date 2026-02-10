'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivorObject) {
    if (herbivorObject.hidden === true) {
      return;
    }

    if (!(herbivorObject instanceof Herbivore)) {
      return;
    }

    herbivorObject.health -= 50;

    Animal.alive = Animal.alive.filter((person) => {
      return person.health > 0;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
