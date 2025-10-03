'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name, 100);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  constructor(name) {
    super(name, 100);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        const index = Animal.alive.indexOf(target);

        if (index > -1) {
          Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
