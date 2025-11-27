'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    const herbivores = [target].filter(
      (beast) => beast.constructor.name === 'Herbivore',
    );

    if (herbivores.length === 0) {
      return;
    }

    const herb = herbivores[0];

    if (herb.hidden) {
      return;
    }

    herb.health -= 50;
    herb.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
