'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name);
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name);
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
