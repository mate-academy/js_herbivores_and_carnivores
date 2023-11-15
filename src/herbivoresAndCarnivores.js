'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = undefined;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden) {
      return;
    }

    if (!(target instanceof Carnivore)) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter(anim => anim !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
