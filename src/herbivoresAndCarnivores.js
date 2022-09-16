'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }

  static died(target) {
    const index = this.alive.indexOf(target);

    this.alive.splice(index, 1);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hasOwnProperty('hidden')
      && !target.hidden) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.died(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
