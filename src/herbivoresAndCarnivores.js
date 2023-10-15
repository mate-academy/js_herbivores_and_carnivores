'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

const FULL_HEALTH = 100;
const BITE_HARM = 50;

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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= BITE_HARM;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
