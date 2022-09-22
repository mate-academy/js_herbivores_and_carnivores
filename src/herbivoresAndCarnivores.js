'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(name) {
    const victim = Animal.alive.find(animal => animal === name);
    const checkPrototype = victim.__proto__.constructor.name === 'Herbivore';

    victim.health = checkPrototype && !victim.hidden
      ? victim.health - 50
      : victim.health;
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
