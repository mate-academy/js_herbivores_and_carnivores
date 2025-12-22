'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive = Animal.alive || [];
    Animal.alive.push(this);
  }
}

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
    if (target instanceof Carnivore) {
      return;
    }

    if (target instanceof Herbivore && target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      const index = Animal.alive.indexOf(target);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
