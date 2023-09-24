'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  remove() {
    const index = Animal.alive.indexOf(this);

    Animal.alive.splice(index, 1);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;

      if (target.health === 0) {
        target.remove();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
