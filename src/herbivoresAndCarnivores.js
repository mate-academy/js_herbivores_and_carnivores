'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    } else {
      throw new Error('Animals must be alive');
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    // I suppose I can't do (!herbivore.hidden) like mentor noticed
    // because I should check is it false, but not undefined
    if (herbivore.hidden === false) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter(({ health }) => health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
