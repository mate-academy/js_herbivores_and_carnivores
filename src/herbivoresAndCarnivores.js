'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }

  dead() {
    const index = Animal.alive.indexOf(this);

    Animal.alive.splice(index, 1);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide(hidden) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      target.dead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
