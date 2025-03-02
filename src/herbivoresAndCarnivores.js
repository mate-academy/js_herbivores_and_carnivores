'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  checkRIP() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (
      target instanceof Herbivore &&
      target.hidden === false &&
      target.health > 0
    ) {
      target.health -= 50;
      target.checkRIP();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
